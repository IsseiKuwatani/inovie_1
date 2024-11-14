import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const schedules = [
  {
    title: 'プロジェクトAキックオフミーティング',
    date: '2024/03/25',
    time: '10:00-11:30',
    participants: ['山田太郎', '鈴木一郎', '田中花子'],
    type: 'meeting',
  },
  {
    title: 'カスタマーインタビュー（B社）',
    date: '2024/03/26',
    time: '14:00-15:00',
    participants: ['山田太郎', '佐藤次郎'],
    type: 'interview',
  },
  {
    title: 'PMF評価会議',
    date: '2024/03/27',
    time: '15:00-16:30',
    participants: ['全チームメンバー'],
    type: 'review',
  },
];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">スケジュール管理</h2>
          <p className="text-sm text-gray-500">今後の予定と進行中のタスク</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          + 予定を追加
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="p-6 border-b last:border-b-0 hover:bg-gray-50"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {schedule.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {schedule.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {schedule.time}
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-400" />
                  <div className="flex items-center space-x-1">
                    {schedule.participants.map((participant, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {participant}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium
                  ${
                    schedule.type === 'meeting'
                      ? 'bg-blue-100 text-blue-800'
                      : schedule.type === 'interview'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}
              >
                {schedule.type === 'meeting'
                  ? 'ミーティング'
                  : schedule.type === 'interview'
                  ? 'インタビュー'
                  : 'レビュー'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}