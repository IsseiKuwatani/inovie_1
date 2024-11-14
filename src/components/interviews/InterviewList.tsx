import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin, Phone, Mic, FileText } from 'lucide-react';
import AudioRecorder from './AudioRecorder';

interface InterviewListProps {
  filter: string;
  searchQuery: string;
}

const interviews = [
  {
    id: 1,
    companyName: '株式会社ABC',
    interviewee: '田中太郎',
    role: '営業部長',
    date: '2024-03-25',
    time: '14:00',
    method: 'online',
    status: 'scheduled',
    objectives: '営業プロセスの課題特定と改善ポイントの発見',
    persona: {
      age: '45-50',
      experience: '20年以上',
      painPoints: ['データ入力の工数', '商談進捗の可視化'],
      goals: ['営業チームの生産性向上', '正確な売上予測'],
    },
    recordingUrl: '',
    transcript: '',
  },
  // ... 他のインタビューデータ
];

export default function InterviewList({ filter, searchQuery }: InterviewListProps) {
  const [expandedInterview, setExpandedInterview] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [activeRecordingId, setActiveRecordingId] = useState<number | null>(null);

  const toggleExpand = (interviewId: number) => {
    setExpandedInterview(expandedInterview === interviewId ? null : interviewId);
  };

  const startRecording = (interviewId: number) => {
    setIsRecording(true);
    setActiveRecordingId(interviewId);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setActiveRecordingId(null);
    // TODO: 録音データの保存処理
  };

  // ... 既存のフィルタリングロジック

  return (
    <div className="space-y-4">
      {interviews.map((interview) => (
        <div
          key={interview.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          {/* ... 既存のインタビュー基本情報表示 ... */}

          {expandedInterview === interview.id && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    インタビュー対象者のペルソナ
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-24">年齢層:</span>
                      <span className="text-gray-900">{interview.persona.age}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-24">業務経験:</span>
                      <span className="text-gray-900">{interview.persona.experience}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">課題:</span>
                      <ul className="mt-1 list-disc list-inside">
                        {interview.persona.painPoints.map((point, index) => (
                          <li key={index} className="text-gray-900">{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">目標:</span>
                      <ul className="mt-1 list-disc list-inside">
                        {interview.persona.goals.map((goal, index) => (
                          <li key={index} className="text-gray-900">{goal}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    インタビュー記録
                  </h4>
                  {interview.status === 'scheduled' ? (
                    <div className="space-y-4">
                      {isRecording && activeRecordingId === interview.id ? (
                        <div>
                          <AudioRecorder onStop={stopRecording} />
                          <button
                            onClick={stopRecording}
                            className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-red-600 hover:bg-red-700"
                          >
                            <Mic className="w-4 h-4 mr-1" />
                            録音を停止
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => startRecording(interview.id)}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          <Mic className="w-4 h-4 mr-1" />
                          録音を開始
                        </button>
                      )}
                      <button
                        className="ml-2 inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        議事録テンプレート
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {interview.recordingUrl && (
                        <audio controls className="w-full">
                          <source src={interview.recordingUrl} type="audio/mpeg" />
                        </audio>
                      )}
                      {interview.transcript && (
                        <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
                          {interview.transcript}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}