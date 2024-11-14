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
    platforms: [
      {
        name: 'Google Ads',
        budget: '¥1,000,000',
        leads: 95,
        cpa: '¥12,000',
      },
      {
        name: 'LinkedIn Ads',
        budget: '¥800,000',
        leads: 65,
        cpa: '¥18,000',
      },
      {
        name: 'Facebook Ads',
        budget: '¥200,000',
        leads: 20,
        cpa: '¥16,000',
      },
    ],
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
    platforms: [
      {
        name: 'ブログ記事',
        budget: '¥500,000',
        leads: 80,
        cpa: '¥10,000',
      },
      {
        name: 'ホワイトペーパー',
        budget: '¥600,000',
        leads: 45,
        cpa: '¥14,000',
      },
      {
        name: 'Webセミナー',
        budget: '¥400,000',
        leads: 25,
        cpa: '¥13,000',
      },
    ],
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
    platforms: [
      {
        name: 'SIer連携',
        budget: '¥1,500,000',
        leads: 0,
        cpa: '-',
      },
      {
        name: 'コンサルティングファーム',
        budget: '¥1,000,000',
        leads: 0,
        cpa: '-',
      },
      {
        name: '業界団体',
        budget: '¥500,000',
        leads: 0,
        cpa: '-',
      },
    ],
  },
];

export default function ChannelsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">チャネル管理</h2>
        <p className="text-sm text-gray-500">
          マーケティングチャネルの効果測定と最適化
        </p>
      </div>

      <div className="space-y-6">
        {channels.map((channel) => (
          <div
            key={channel.name}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{channel.name}</h3>
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

              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-500">リード数</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{channel.leads}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Target className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-500">コンバージョン</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{channel.conversions}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-500">獲得単価</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{channel.cpa}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-500">ROI</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{channel.roi}x</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">プラットフォーム別実績</h4>
                <div className="grid grid-cols-3 gap-4">
                  {channel.platforms.map((platform) => (
                    <div
                      key={platform.name}
                      className="p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium text-gray-900">{platform.name}</h5>
                        <span className="text-sm text-gray-500">
                          {platform.budget}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-500">リード数</p>
                          <p className="font-medium text-gray-900">{platform.leads}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">獲得単価</p>
                          <p className="font-medium text-gray-900">{platform.cpa}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {channel.status === 'active' && (
                <div className="mt-4">
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
          </div>
        ))}
      </div>
    </div>
  );
}