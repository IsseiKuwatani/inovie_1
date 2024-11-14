import React from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

const phases = [
  {
    id: 'cpf',
    name: 'CPF',
    title: 'カスタマープロブレムフィット',
    milestones: [
      { id: 1, name: '顧客インタビュー（最低20件）', completed: true },
      { id: 2, name: '主要な課題の特定と検証', completed: true },
      { id: 3, name: 'ペルソナの定義', completed: false },
      { id: 4, name: '市場規模の検証', completed: false },
    ],
    nextActions: [
      '未実施のインタビューの予定を確定',
      'インタビュー結果の分析と整理',
      'ペルソナ仮説の検証',
    ],
  },
  {
    id: 'psf',
    name: 'PSF',
    title: 'プロブレムソリューションフィット',
    milestones: [
      { id: 1, name: '解決策案の作成', completed: true },
      { id: 2, name: 'プロトタイプの作成', completed: false },
      { id: 3, name: 'ユーザーテスト（最低10件）', completed: false },
      { id: 4, name: '解決策の改善と検証', completed: false },
    ],
    nextActions: [
      'プロトタイプのデザイン作成',
      'テストユーザーの募集',
      'フィードバックの収集方法の確定',
    ],
  },
  {
    id: 'spf',
    name: 'SPF',
    title: 'ソリューションプロダクトフィット',
    milestones: [
      { id: 1, name: 'MVP機能の定義', completed: false },
      { id: 2, name: '開発ロードマップの作成', completed: false },
      { id: 3, name: 'アルファ版のリリース', completed: false },
      { id: 4, name: 'ベータテストの実施', completed: false },
    ],
    nextActions: [
      'MVP機能リストの作成',
      '開発チームとの機能スコープの確認',
      'テストユーザーの選定基準の決定',
    ],
  },
  {
    id: 'pmf',
    name: 'PMF',
    title: 'プロダクトマーケットフィット',
    milestones: [
      { id: 1, name: '初期ユーザーの獲得', completed: false },
      { id: 2, name: 'ユーザー行動分析', completed: false },
      { id: 3, name: 'NPS測定とフィードバック収集', completed: false },
      { id: 4, name: '収益モデルの検証', completed: false },
    ],
    nextActions: [
      'アクティブユーザー数の目標設定',
      '主要指標（KPI）の設定',
      'フィードバックループの構築',
    ],
  },
  {
    id: 'gtm',
    name: 'GTM',
    title: 'ゴートゥーマーケット',
    milestones: [
      { id: 1, name: 'マーケティング戦略の策定', completed: false },
      { id: 2, name: 'セールス体制の構築', completed: false },
      { id: 3, name: '価格戦略の決定', completed: false },
      { id: 4, name: '拡大計画の策定', completed: false },
    ],
    nextActions: [
      'ターゲット市場の優先順位付け',
      'マーケティングチャネルの選定',
      '初期販売計画の作成',
    ],
  },
];

export default function PMFWorkflow() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">PMFプロセスのワークフロー</h2>
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <div key={phase.id} className="relative">
            {index < phases.length - 1 && (
              <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-200" />
            )}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                <span className="text-lg font-bold text-indigo-600">{index + 1}</span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-500">Phase {phase.name}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 mr-2">
                      {phase.milestones.filter(m => m.completed).length}/{phase.milestones.length}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">マイルストーン</h4>
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone) => (
                        <li key={milestone.id} className="flex items-center">
                          {milestone.completed ? (
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          ) : (
                            <Circle className="w-4 h-4 text-gray-300 mr-2" />
                          )}
                          <span className="text-sm text-gray-600">{milestone.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">次のアクション</h4>
                    <ul className="space-y-2">
                      {phase.nextActions.map((action, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-sm text-gray-600">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}