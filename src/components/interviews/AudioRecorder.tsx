import React, { useState, useEffect } from 'react';
import { Mic, Square, AlertCircle } from 'lucide-react';

interface AudioRecorderProps {
  onStop: (audioBlob: Blob) => void;
}

export default function AudioRecorder({ onStop }: AudioRecorderProps) {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [error, setError] = useState<string>('');
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mediaRecorder?.state === 'recording') {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [mediaRecorder?.state]);

  useEffect(() => {
    const initializeRecorder = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAudioChunks((prev) => [...prev, event.data]);
          }
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
          onStop(audioBlob);
          setAudioChunks([]);
          setRecordingTime(0);
        };

        setMediaRecorder(recorder);
      } catch (err) {
        setError('マイクへのアクセスが許可されていません。');
      }
    };

    initializeRecorder();
  }, [onStop]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (error) {
    return (
      <div className="flex items-center text-red-600 text-sm">
        <AlertCircle className="w-4 h-4 mr-1" />
        {error}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        {mediaRecorder?.state === 'recording' ? (
          <div className="animate-pulse">
            <Mic className="w-5 h-5 text-red-600" />
          </div>
        ) : (
          <Mic className="w-5 h-5 text-gray-400" />
        )}
      </div>
      <div className="text-sm font-medium">
        {formatTime(recordingTime)}
      </div>
      <div className="flex space-x-2">
        {mediaRecorder?.state !== 'recording' ? (
          <button
            onClick={() => mediaRecorder?.start()}
            className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors"
          >
            録音開始
          </button>
        ) : (
          <button
            onClick={() => mediaRecorder?.stop()}
            className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors flex items-center"
          >
            <Square className="w-4 h-4 mr-1" />
            停止
          </button>
        )}
      </div>
    </div>
  );
}