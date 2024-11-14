import React from 'react';
import { Code2, CheckCircle2, Users, Activity } from 'lucide-react';

interface SPFPhaseProps {
  data: any;
  projectId: string;
}

export default function SPFPhase({ data, projectId }: SPFPhaseProps) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          ソリューションプロダクトフィット (SPF)
        </h2>
        <p className="text-gray-500 mt-1">
          解決策を実際の製品として実装し、ユーザビリティを検証するフェーズ
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Code2 className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">実装機能数</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {data.completedFeatures}/{data.features}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">テストユーザー</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.userTests}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">バグ修正率</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">92%</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">完了タスク</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {Math.round((data.completedFeatures / data.features) * 100)}%
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">機能実装状況</h3>
          <div className="space-y-4">
            {[
              {
                name: '音声入力機能',
                description: '商談内容の音声認識と自動テキスト化',
                progress: 100,
                status: 'completed',
              },
              {
                name: 'インサイト分析',
                description: '顧客データの分析と可視化',
                progress: 85,
                status: 'in_progress',
              },
              {
                name: 'レポート自動生成',
                description: '営業活動レポートの自動作成',
                progress: 60,
                status: 'in_progress',
              },
            ].map((feature, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{feature.name}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      feature.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {feature.status === 'completed' ? '完了' : '開発中'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{feature.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      feature.status === 'completed'
                        ? 'bg-green-500'
                        : 'bg-indigo-600'
                    }`}
                    style={{ width: `${feature.progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">進捗</span>
                  <span className="text-xs font-medium text-gray-900">
                    {feature.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ユーザビリティテスト結果
          </h3>
          <div className="space-y-4">
            {[
              {
                task: '商談記録の作成',
                metrics: {
                  completionRate: 95,
                  timeToComplete: '2分30秒',
                  errorRate: 5,
                },
                feedback: [
                  '直感的な操作性',
                  '音声認識の精度が高い',
                ],
              },
              {
                task: 'インサイトレポートの確認',
                metrics: {
                  completionRate: 88,
                  timeToComplete: '1分45秒',
                  errorRate: 12,
                },
                feedback: [
                  'データの可視化が分かりやすい',
                  'フィルター機能の改善が必要',
                ],
              },
            ].map((test, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{test.task}</h4>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">完了率</p>
                    <p className="font-medium text-gray-900">
                      {test.metrics.completionRate}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">所要時間</p>
                    <p className="font-medium text-gray-900">
                      {test.metrics.timeToComplete}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">エラー率</p>
                    <p className="font-medium text-gray-900">
                      {test.metrics.errorRate}%
                    </p>
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