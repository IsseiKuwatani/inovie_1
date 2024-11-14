import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const strategies = [
  {
    title: '新規市場開拓',
    icon: Globe,
    items: [
      {
        name: '地方企業向けプロモーション強化',
        status: 'progress',
        progress: 65,
      },
      {
        name: '業界特化型ソリューションの展開',
        status: 'progress',
        progress: 40,
      },
      {
        name: '海外市場調査の開始',
        status: 'planned',
        progress: 0,
      },
    ],
  },
  {
    title: 'プロダクト展開',
    icon: Target,
    items: [
      {
        name: 'エンタープライズプランの提供',
        status: 'progress',
        progress: 80,
      },
      {
        name: 'API連携パートナーの拡大',
        status: 'planned',
        progress: 0,
      },
      {
        name: 'カスタマイズオプションの追加',
        status: 'planned',
        progress: 0,
      },
    ],
  },
  {
    title: '顧客基盤強化',
    icon: Users,
    items: [
      {
        name: 'カスタマーサクセス体制の確立',
        status: 'progress',
        progress: 90,
      },
      {
        name: 'ユーザーコミュニティの構築',
        status: 'planned',
        progress: 0,
      },
      {
        name: '定期的なユーザー会の開催',
        status: 'planned',
        progress: 0,
      },
    ],
  },
];

export default function GrowthStrategy() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">成長戦略</h2>
      <div className="space-y-6">
        {strategies.map((strategy) => (
          <div key={strategy.title}>
            <div className="flex items-center mb-3">
              <strategy.icon className="w-5 h-5 text-indigo-600 mr-2" />
              <h3 className="font-medium text-gray-900">{strategy.title}</h3>
            </div>
            <div className="space-y-3">
              {strategy.items.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {item.name}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.status === 'progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {item.status === 'progress' ? '進行中' : '計画中'}
                    </span>
                  </div>
                  {item.status === 'progress' && (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">進捗</span>
                        <span className="font-medium text-gray-900">
                          {item.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}