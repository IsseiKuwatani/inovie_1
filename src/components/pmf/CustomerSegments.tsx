import React from 'react';
import { Users, TrendingUp, Clock } from 'lucide-react';

const segments = [
  {
    name: '大手企業',
    users: 450,
    growth: '+12%',
    retention: '88%',
    avgUsage: '4.5時間/日',
    satisfaction: 4.3,
  },
  {
    name: '中小企業',
    users: 580,
    growth: '+18%',
    retention: '82%',
    avgUsage: '3.8時間/日',
    satisfaction: 4.1,
  },
  {
    name: 'スタートアップ',
    users: 220,
    growth: '+25%',
    retention: '78%',
    avgUsage: '3.2時間/日',
    satisfaction: 4.0,
  },
];

export default function CustomerSegments() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">顧客セグメント分析</h2>
      <div className="space-y-4">
        {segments.map((segment) => (
          <div
            key={segment.name}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium text-gray-900">{segment.name}</h3>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {segment.users}ユーザー
                  <span className="text-green-600 ml-2">{segment.growth}</span>
                </div>
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-${
                      star <= segment.satisfaction ? 'yellow' : 'gray'
                    }-400`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-indigo-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">継続率</p>
                  <p className="font-medium text-gray-900">{segment.retention}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-indigo-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">平均利用時間</p>
                  <p className="font-medium text-gray-900">{segment.avgUsage}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-indigo-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">満足度</p>
                  <p className="font-medium text-gray-900">{segment.satisfaction}/5.0</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}