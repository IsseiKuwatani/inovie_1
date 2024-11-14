import React, { useState } from 'react';
import { Plus, Filter, Calendar, Clock, Video, MapPin, Phone } from 'lucide-react';
import InterviewModal from '../../components/interviews/InterviewModal';
import AudioRecorder from '../../components/interviews/AudioRecorder';

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
    objectives: [
      '営業プロセスの課題特定',
      '現在の業務フローの理解',
      'システム導入への期待の把握',
    ],
    questions: [
      '現在の営業活動における主な課題は何ですか？',
      'データ入力にどのくらいの時間を費やしていますか？',
      '理想的な営業支援システムとはどのようなものですか？',
    ],
    insights: [],
    recordingUrl: '',
    transcript: '',
  },
  {
    id: 2,
    companyName: 'DEF株式会社',
    interviewee: '鈴木一郎',
    role: '営業マネージャー',
    date: '2024-03-24',
    time: '15:30',
    method: 'offline',
    status: 'completed',
    objectives: [
      '商談管理の現状把握',
      'レポーティングの課題特定',
    ],
    questions: [
      '商談の進捗管理はどのように行っていますか？',
      'レポート作成にかかる工数を教えてください',
    ],
    insights: [
      'レポート作成に1日2時間程度費やしている',
      'リアルタイムな情報共有が課題',
      '営業メンバー間でのナレッジ共有が不足',
    ],
    recordingUrl: 'https://example.com/recording/2',
    transcript: '議事録の内容...',
  },
];

export default function InterviewsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedInterview, setExpandedInterview] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [activeRecordingId, setActiveRecordingId] = useState<number | null>(null);

  const toggleExpand = (interviewId: number) => {
    setExpandedInterview(expandedInterview === interviewId ? null : interviewId);
  };

  const startRecording = (interviewId: number) => {
    setIsRecording(true);
    setActiveRecordingId(interviewId);
  };

  const stopRecording = (audioBlob: Blob) => {
    setIsRecording(false);
    setActiveRecordingId(null);
    // TODO: 録音データの保存処理
  };

  const filteredInterviews = interviews
    .filter(interview => {
      if (filter === 'all') return true;
      return interview.status === filter;
    })
    .filter(interview => {
      if (!searchQuery) return true;
      return (
        interview.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        interview.interviewee.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'online':
        return <Video className="w-4 h-4 text-blue-500" />;
      case 'offline':
        return <MapPin className="w-4 h-4 text-green-500" />;
      case 'phone':
        return <Phone className="w-4 h-4 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">インタビュー管理</h2>
          <p className="text-sm text-gray-500">
            顧客インタビューの計画、実施、分析を一元管理
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          インタビューを追加
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Filter className="w-5 h-5 text-gray-400 mr-2" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">全て</option>
            <option value="scheduled">予定</option>
            <option value="completed">完了</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="インタビューを検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-4">
        {filteredInterviews.map((interview) => (
          <div
            key={interview.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {interview.companyName}
                  </h3>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <span className="mr-4">{interview.interviewee}</span>
                    <span>{interview.role}</span>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    interview.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {interview.status === 'completed' ? '完了' : '予定'}
                </span>
              </div>

              <div className="mt-4 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {interview.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {interview.time}
                </div>
                <div className="flex items-center">
                  {getMethodIcon(interview.method)}
                  <span className="ml-1">
                    {interview.method === 'online'
                      ? 'オンライン'
                      : interview.method === 'offline'
                      ? '対面'
                      : '電話'}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => toggleExpand(interview.id)}
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  {expandedInterview === interview.id ? '詳細を閉じる' : '詳細を表示'}
                </button>
              </div>

              {expandedInterview === interview.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        インタビューの目的
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {interview.objectives.map((objective, index) => (
                          <li key={index}>{objective}</li>
                        ))}
                      </ul>

                      <h4 className="text-sm font-medium text-gray-900 mt-4 mb-2">
                        質問事項
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {interview.questions.map((question, index) => (
                          <li key={index}>{question}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {interview.status === 'scheduled' ? (
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">
                            インタビュー記録
                          </h4>
                          {isRecording && activeRecordingId === interview.id ? (
                            <AudioRecorder onStop={stopRecording} />
                          ) : (
                            <button
                              onClick={() => startRecording(interview.id)}
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                              録音を開始
                            </button>
                          )}
                        </div>
                      ) : (
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">
                            主要なインサイト
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {interview.insights.map((insight, index) => (
                              <li key={index}>{insight}</li>
                            ))}
                          </ul>

                          {interview.recordingUrl && (
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">
                                録音データ
                              </h4>
                              <audio controls className="w-full">
                                <source src={interview.recordingUrl} type="audio/mpeg" />
                              </audio>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <InterviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}