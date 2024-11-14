import React, { useState } from 'react';
import { Code2, Users, CheckCircle2, MessageSquare } from 'lucide-react';

const features = [
  {
    id: 1,
    title: '音声入力機能',
    description: '商談内容の音声認識と自動テキスト化',
    status: 'completed',
    priority: 'high',
    progress: 100,
    assignee: '鈴木一郎',
    testResults: {
      passed: 15,
      failed: 2,
      pending: 0,
    },
    feedback: [
      '認識精度が期待以上',
      'バックグラウンドノイズへの対応が必要',
      'ショートカットキーの追加要望',
    ],
  },
  {
    id: 2,
    title: 'インサイト分析ダッシュボード',
    description: '顧客データの可視化と分析レポート',
    status: 'in_progress',
    priority: 'high',
    progress: 75,
    assignee: '田中花子',
    testResults: {
      passed: 8,
      failed: 3,
      pending: 4,
    },
    feedback: [
      'データの可視化が直感的',
      'カスタマイズ機能の追加希望',
    ],
  },
  {
    id: 3,
    title: 'レポート自動生成',
    description: '営業活動レポートの自動作成機能',
    status: 'planned',
    priority: 'medium',
    progress: 30,
    assignee: '佐藤次郎',
    testResults: {
      passed: 4,
      failed: 1,
      pending: 8,
    },
    feedback: [
      'テンプレートの種類を増やしてほしい',
    ],
  },
];

interface FeatureListProps {
  filter: string;
  searchQuery: string;
}

export default function FeatureList({ filter, searchQuery }: FeatureListProps) {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleExpand = (featureId: number) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  const filteredFeatures = features
    .filter(feature => {
      if (filter === 'all') return true;
      return feature.status === filter;
    })
    .filter(feature => {
      if (!searchQuery) return true;
      return (
        feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  return (
    <div className="space-y-4">
      {filteredFeatures.map((feature) => (
        <div
          key={feature.id}
          className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  feature.priority === 'high'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {feature.priority === 'high' ? '優先度：高' : '優先度：中'}
              </span>
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
                  ? '開発中'
                  : '計画中'}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 mt-3">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {feature.assignee}
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
              {feature.testResults.passed} テスト成功
            </div>
            <div className="flex items-center">
              <Code2 className="w-4 h-4 mr-1 text-red-500" />
              {feature.testResults.failed} テスト失敗
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              {feature.feedback.length}件のフィードバック
            </div>
          </div>

          <div className="mt-3">
            <div className="flex justify-between items-center text-sm mb-1">
              <span className="text-gray-500">進捗状況</span>
              <span className="font-medium text-gray-900">{feature.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${feature.progress}%` }}
              />
            </div>
          </div>

          <div className="mt-3">
            <button
              onClick={() => toggleExpand(feature.id)}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              {expandedFeature === feature.id ? '詳細を閉じる' : '詳細を表示'}
            </button>
          </div>

          {expandedFeature === feature.id && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  テスト結果
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-500">成功</p>
                    <p className="text-lg font-semibold text-green-600">
                      {feature.testResults.passed}
                    </p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-gray-500">失敗</p>
                    <p className="text-lg font-semibold text-red-600">
                      {feature.testResults.failed}
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">保留</p>
                    <p className="text-lg font-semibold text-gray-600">
                      {feature.testResults.pending}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  フィードバック
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {feature.feedback.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}