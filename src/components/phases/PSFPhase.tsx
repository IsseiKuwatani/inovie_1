import React from 'react';
import { Lightbulb, Target, CheckCircle2, Users } from 'lucide-react';

interface PSFPhaseProps {
  data: any;
  projectId: string;
}

export default function PSFPhase({ data, projectId }: PSFPhaseProps) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          プロブレムソリューションフィット (PSF)
        </h2>
        <p className="text-gray-500 mt-1">
          特定した課題に対する解決策を考案し、検証するフェーズ
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">解決策案</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.solutions}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">プロトタイプ</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.prototypes}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">検証済解決策</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.validatedSolutions}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">検証参加者</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">15</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">提案解決策</h3>
          <div className="space-y-4">
            {[
              {
                title: 'AI搭載営業支援システム',
                description: '自然言語処理とAIによる商談記録の自動化と分析',
                validation: 95,
                status: 'validated',
              },
              {
                title: 'インサイト分析ダッシュボード',
                description: '顧客データの可視化と予測分析による意思決定支援',
                validation: 88,
                status: 'in_progress',
              },
              {
                title: '統合CRMプラットフォーム',
                description: '営業活動全体を一元管理するプラットフォーム',
                validation: 82,
                status: 'planned',
              },
            ].map((solution, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{solution.title}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      solution.status === 'validated'
                        ? 'bg-green-100 text-green-800'
                        : solution.status === 'in_progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {solution.status === 'validated'
                      ? '検証済'
                      : solution.status === 'in_progress'
                      ? '検証中'
                      : '計画中'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{solution.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${solution.validation}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">検証進捗</span>
                  <span className="text-xs font-medium text-gray-900">
                    {solution.validation}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            プロトタイプテスト結果
          </h3>
          <div className="space-y-4">
            {[
              {
                feature: '音声入力による商談記録',
                feedback: [
                  '入力の手間が大幅に削減された',
                  '正確性の向上が必要',
                ],
                satisfaction: 4.2,
              },
              {
                feature: '顧客インサイト分析',
                feedback: [
                  'データの可視化が直感的',
                  'カスタマイズ性の向上を希望',
                ],
                satisfaction: 4.5,
              },
            ].map((test, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{test.feature}</h4>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-${
                          star <= test.satisfaction ? 'yellow' : 'gray'
                        }-400`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {test.feedback.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}