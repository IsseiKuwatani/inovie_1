import React from 'react';
import { Target, Users, Globe, DollarSign } from 'lucide-react';

const strategies = [
  {
    title: '市場展開戦略',
    icon: Globe,
    items: [
      {
        name: '地方企業向けプロモーション強化',
        status: 'progress',
        progress: 65,
        details: {
          objectives: [
            '地方都市での認知度向上',
            '地域パートナーの開拓',
            'ローカルイベントの開催',
          ],
          kpis: [
            '地方企業の新規獲得数: 月間20社',
            'パートナー数: 10社',
            'イベント参加者満足度: 4.5以上',
          ],
          timeline: '2024年Q2-Q3',
        },
      },
      {
        name: '業界特化型ソリューションの展開',
        status: 'progress',
        progress: 40,
        details: {
          objectives: [
            '製造業向けテンプレートの開発',
            '業界別ユースケースの作成',
            '専門家パートナーシップの構築',
          ],
          kpis: [
            '業界別テンプレート利用率: 60%以上',
            '業界特化型の成約率: 40%以上',
            'パートナー経由の案件数: 月間5件',
          ],
          timeline: '2024年Q3-Q4',
        },
      },
    ],
  },
  {
    title: 'プロダクト戦略',
    icon: Target,
    items: [
      {
        name: 'エンタープライズプランの提供',
        status: 'progress',
        progress: 80,
        details: {
          objectives: [
            'カスタマイズ機能の拡充',
            'セキュリティ機能の強化',
            'SLA保証の提供',
          ],
          kpis: [
            'エンタープライズ契約数: 20社',
            'カスタマイズ要望対応率: 90%',
            'サービス稼働率: 99.99%',
          ],
          timeline: '2024年Q2',
        },
      },
      {
        name: 'API連携パートナーの拡大',
        status: 'planned',
        progress: 0,
        details: {
          objectives: [
            'API機能の拡充',
            '主要SaaSとの連携',
            'パートナー開発支援',
          ],
          kpis: [
            'API利用企業数: 50社',
            '連携サービス数: 20以上',
            'API呼び出し数: 月間100万回',
          ],
          timeline: '2024年Q3-Q4',
        },
      },
    ],
  },
  {
    title: '収益化戦略',
    icon: DollarSign,
    items: [
      {
        name: '段階的な価格戦略の導入',
        status: 'progress',
        progress: 90,
        details: {
          objectives: [
            '利用規模に応じた価格帯の設定',
            'アップセル機会の創出',
            '長期契約の促進',
          ],
          kpis: [
            'ARPU: 20%増',
            'アップセル成功率: 30%',
            '年間契約比率: 60%',
          ],
          timeline: '2024年Q2',
        },
      },
      {
        name: '付加価値サービスの展開',
        status: 'planned',
        progress: 0,
        details: {
          objectives: [
            'コンサルティングサービスの提供',
            'カスタマイズ開発の受託',
            'トレーニングプログラムの提供',
          ],
          kpis: [
            '付加価値サービス収益: 全体の20%',
            'サービス満足度: 4.5以上',
            'トレーニング受講者数: 月間100名',
          ],
          timeline: '2024年Q3-Q4',
        },
      },
    ],
  },
];

export default function StrategyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">展開戦略</h2>
        <p className="text-sm text-gray-500">
          市場展開と成長戦略の計画・実行管理
        </p>
      </div>

      <div className="space-y-6">
        {strategies.map((strategy) => (
          <div key={strategy.title}>
            <div className="flex items-center mb-4">
              <strategy.icon className="w-5 h-5 text-indigo-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">{strategy.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {strategy.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-base font-medium text-gray-900">
                        {item.name}
                      </h4>
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
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-500">進捗</span>
                          <span className="font-medium text-gray-900">
                            {item.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-900 mb-2">
                          目標
                        </h5>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {item.details.objectives.map((objective, i) => (
                            <li key={i}>{objective}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-900 mb-2">
                          KPI
                        </h5>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {item.details.kpis.map((kpi, i) => (
                            <li key={i}>{kpi}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">実施時期</span>
                        <span className="font-medium text-gray-900">
                          {item.details.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}