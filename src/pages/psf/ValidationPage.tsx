import React from 'react';
import { BarChart2, Users, ThumbsUp, MessageSquare } from 'lucide-react';

const validationResults = [
  {
    solutionName: 'AI搭載音声入力システム',
    metrics: {
      testers: 15,
      completionRate: 92,
      satisfactionScore: 4.5,
      feedbackCount: 28,
    },
    positivePoints: [
      '入力時間の大幅削減（平均65%減）',
      '高い認識精度（95%以上）',
      'リアルタイムな情報共有が可能に',
    ],
    improvements: [
      'ノイズ環境下での精度向上',
      'カスタムコマンドの追加',
      'ショートカットキーの実装',
    ],
    userQuotes: [
      {
        comment: '商談記録の作成時間が1/3になった',
        role: '営業マネージャー',
        company: '株式会社ABC',
      },
      {
        comment: 'チーム全体の生産性が向上した',
        role: '営業部長',
        company: 'DEF株式会社',
      },
    ],
  },
  // ... 他の検証結果
];

export default function ValidationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">検証結果</h2>
        <p className="text-sm text-gray-500">
          プロトタイプのユーザーテスト結果と改善点の分析
        </p>
      </div>

      {validationResults.map((result, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {result.solutionName}
            </h3>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-500">テスター数</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {result.metrics.testers}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <BarChart2 className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-500">完了率</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {result.metrics.completionRate}%
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <ThumbsUp className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-500">満足度</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {result.metrics.satisfactionScore}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-500">フィードバック数</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {result.metrics.feedbackCount}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  高評価のポイント
                </h4>
                <ul className="space-y-2">
                  {result.positivePoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <ThumbsUp className="w-4 h-4 text-green-500 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  改善ポイント
                </h4>
                <ul className="space-y-2">
                  {result.improvements.map((improvement, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <MessageSquare className="w-4 h-4 text-yellow-500 mr-2" />
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                ユーザーの声
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {result.userQuotes.map((quote, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <p className="text-sm text-gray-600 italic">"{quote.comment}"</p>
                    <div className="mt-2 text-sm">
                      <span className="font-medium text-gray-900">{quote.role}</span>
                      <span className="text-gray-500"> @ {quote.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}