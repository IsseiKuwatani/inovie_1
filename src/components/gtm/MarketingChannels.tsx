import React from 'react';
import { TrendingUp, DollarSign, Users, Target } from 'lucide-react';

const channels = [
  {
    name: 'オンライン広告',
    budget: '¥2,000,000',
    spent: '¥1,200,000',
    leads: 180,
    conversions: 45,
    cpa: '¥15,000',
    roi: 2.8,
    status: 'active',
  },
  {
    name: 'コンテンツマーケティング',
    budget: '¥1,500,000',
    spent: '¥800,000',
    leads: 150,
    conversions: 38,
    cpa: '¥12,000',
    roi: 3.2,
    status: 'active',
  },
  {
    name: 'パートナーシップ',
    budget: '¥3,000,000',
    spent: '¥0',
    leads: 0,
    conversions: 0,
    cpa: '-',
    roi: 0,
    status: 'planned',
  },
];

export default function MarketingChannels() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">マーケティングチャネル</h2>
      <div className="space-y-4">
        {channels.map((channel) => (
          <div
            key={channel.name}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium text-gray-900">{channel.name}</h3>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <DollarSign className="w-4 h-4 mr-1" />
                  予算: {channel.budget}
                  <span className="mx-2">|</span>
                  使用額: {channel.spent}
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  channel.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {channel.status === 'active' ? '実行中' : '計画中'}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="flex items-center">
                <Users className="w-4 h-4 text-indigo-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">リード数</p>
                  <p className="font-medium text-gray-900">{channel.leads}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 text-indigo-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">コンバージョン</p>
                  <p className="font-medium text-gray-900">{channel.conversions}</p>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 text-indigo-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">獲得単価</p>
                  <p className="font-medium text-gray-900">{channel.cpa}</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-indigo-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">ROI</p>
                  <p className="font-medium text-gray-900">{channel.roi}x</p>
                </div>
              </div>
            </div>

            {channel.status === 'active' && (
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">予算消化率</span>
                  <span className="font-medium text-gray-900">
                    {Math.round((parseInt(channel.spent.replace(/[^0-9]/g, '')) / 
                               parseInt(channel.budget.replace(/[^0-9]/g, ''))) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{
                      width: `${Math.round((parseInt(channel.spent.replace(/[^0-9]/g, '')) / 
                                          parseInt(channel.budget.replace(/[^0-9]/g, ''))) * 100)}%`
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}