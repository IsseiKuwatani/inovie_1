import React from 'react';
import { Calendar, Clock, Target, Users } from 'lucide-react';

const milestones = [
  {
    phase: 'アルファ版',
    date: '2024/04',
    status: 'in_progress',
    progress: 75,
    features: [
      {
        name: '音声入力基本機能',
        status: 'completed',
        assignee: '鈴木一郎',
      },
      {
        name: 'テキスト変換エンジン',
        status: 'in_progress',
        assignee: '田中花子',
      },
      {
        name: '基本的な編集機能',
        status: 'in_progress',
        assignee: '佐藤次郎',
      },
    ],
    objectives: [
      '基本機能の実装完了',
      '主要なバグの修正',
      '初期パフォーマンステスト',
    ],
  },
  {
    phase: 'ベータ版',
    date: '2024/06',
    status: 'planned',
    progress: 20,
    features: [
      {
        name: 'AI分析エンジン',
        status: 'planned',
        assignee: '山田太郎',
      },
      {
        name: 'レポート自動生成',
        status: 'planned',
        assignee: '高橋五郎',
      },
    ],
    objectives: [
      'AI機能の統合',
      'パフォーマンスの最適化',
      'ユーザーフィードバックの収集',
    ],
  },
  {
    phase: '正式リリース',
    date: '2024/08',
    status: 'planned',
    progress: 0,
    features: [
      {
        name: 'エンタープライズ機能',
        status: 'planned',
        assignee: '未定',
      },
      {
        name: 'API連携機能',
        status: 'planned',
        assignee: '未定',
      },
    ],
    objectives: [
      '全機能の安定動作確認',
      'セキュリティ監査の完了',
      'ドキュメントの整備',
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">開発ロードマップ</h2>
        <p className="text-sm text-gray-500">
          製品開発の計画と進捗管理
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="flex items-start">
                <div className="absolute left-0 w-16 text-center">
                  <div className="w-16 py-1 px-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                    {milestone.date}
                  </div>
                </div>
                <div className="ml-24 bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {milestone.phase}
                      </h3>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        進捗: {milestone.progress}%
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        milestone.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : milestone.status === 'in_progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {milestone.status === 'completed'
                        ? '完了'
                        : milestone.status === 'in_progress'
                        ? '進行中'
                        : '計画中'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        実装機能
                      </h4>
                      <div className="space-y-2">
                        {milestone.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {feature.name}
                              </p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Users className="w-4 h-4 mr-1" />
                                {feature.assignee}
                              </div>
                            </div>
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                feature.status === 'completed'
                                  ? 'bg-green-100 text-green-800'
                                  : feature.status === 'in_progress'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {feature.status === 'completed'
                                ? '完了'
                                : feature.status === 'in_progress'
                                ? '進行中'
                                : '計画中'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        目標
                      </h4>
                      <ul className="space-y-2">
                        {milestone.objectives.map((objective, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <Target className="w-4 h-4 text-indigo-600 mr-2" />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {milestone.status === 'in_progress' && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">全体の進捗</span>
                        <span className="font-medium text-gray-900">
                          {milestone.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${milestone.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}