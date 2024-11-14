import React from 'react';
import { Users, TrendingUp, BarChart2, Heart } from 'lucide-react';

interface PMFPhaseProps {
  data: any;
  projectId: string;
}

export default function PMFPhase({ data, projectId }: PMFPhaseProps) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          プロダクトマーケットフィット (PMF)
        </h2>
        <p className="text-gray-500 mt-1">
          製品が市場ニーズを満たし、持続的な成長を実現できているかを検証するフェーズ
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">アクティブユーザー</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.activeUsers}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">継続率</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.retentionRate}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">NPS</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.nps}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <BarChart2 className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">成長率</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">+24%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ユーザー分析</h3>
          <div className="space-y-4">
            {[
              {
                metric: 'ユーザーセグメント別利用状況',
                data: [
                  { segment: '大企業', percentage: 45, trend: 'up' },
                  { segment: '中小企業', percentage: 35, trend: 'up' },
                  { segment: 'スタートアップ', percentage: 20, trend: 'stable' },
                ],
              },
              {
                metric: '主要機能の利用率',
                data: [
                  { feature: '音声入力', percentage: 78, trend: 'up' },
                  { feature: 'インサイト分析', percentage: 65, trend: 'up' },
                  { feature: 'レポート生成', percentage: 55, trend: 'up' },
                ],
              },
            ].map((analysis, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">{analysis.metric}</h4>
                <div className="space-y-2">
                  {analysis.data.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {item.segment || item.feature}
                      </span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                          <div
                            className="h-2 bg-indigo-600 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {item.percentage}%
                        </span>
                        <span
                          className={`ml-2 ${
                            item.trend === 'up'
                              ? 'text-green-500'
                              : item.trend === 'down'
                              ? 'text-red-500'
                              : 'text-gray-500'
                          }`}
                        >
                          {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ユーザーフィードバック
          </h3>
          <div className="space-y-4">
            {[
              {
                company: '株式会社ABC',
                rating: 5,
                feedback:
                  '営業活動の効率が大幅に向上し、チーム全体の生産性が上がった。特に音声入力機能は革新的。',
                impact: {
                  timeReduction: '40%',
                  salesIncrease: '25%',
                },
              },
              {
                company: 'DEF株式会社',
                rating: 4,
                feedback:
                  'インサイト分析が非常に有用。ただし、カスタマイズ性の向上を期待。',
                impact: {
                  timeReduction: '35%',
                  salesIncrease: '20%',
                },
              },
            ].map((feedback, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {feedback.company}
                    </h4>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-${
                            star <= feedback.rating ? 'yellow' : 'gray'
                          }-400`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600">
                      工数削減: {feedback.impact.timeReduction}
                    </div>
                    <div className="text-sm text-indigo-600">
                      売上増加: {feedback.impact.salesIncrease}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{feedback.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}