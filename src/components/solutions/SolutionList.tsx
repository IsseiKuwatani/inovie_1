import React, { useState } from 'react';
import { Users, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

interface SolutionListProps {
  filter: string;
  searchQuery: string;
}

const solutions = [
  {
    id: 1,
    title: 'AI搭載音声入力システム',
    description: '商談内容を音声認識で自動的にテキスト化し、CRMに反映する',
    status: 'validated',
    validation: 95,
    testers: 8,
    positiveResponses: 7,
    negativeResponses: 1,
    features: [
      '音声認識による自動テキスト化',
      'キーワード抽出と自動タグ付け',
      'CRMとの自動連携',
    ],
    feedback: [
      '入力時間が大幅に削減された',
      '正確性が高く信頼できる',
      'リアルタイムな情報共有が可能に',
    ],
  },
  {
    id: 2,
    title: 'インサイト分析ダッシュボード',
    description: '顧客データを可視化し、AIによる予測分析を提供',
    status: 'in_progress',
    validation: 75,
    testers: 6,
    positiveResponses: 4,
    negativeResponses: 2,
    features: [
      'リアルタイムデータ可視化',
      'AIによる予測分析',
      'カスタマイズ可能なレポート',
    ],
    feedback: [
      'データの見える化が直感的',
      'カスタマイズ性の向上が必要',
    ],
  },
];

export default function SolutionList({ filter, searchQuery }: SolutionListProps) {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const toggleExpand = (solutionId: number) => {
    setExpandedSolution(expandedSolution === solutionId ? null : solutionId);
  };

  const filteredSolutions = solutions
    .filter(solution => {
      if (filter === 'all') return true;
      return solution.status === filter;
    })
    .filter(solution => {
      if (!searchQuery) return true;
      return (
        solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        solution.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  return (
    <div className="space-y-4">
      {filteredSolutions.map((solution) => (
        <div
          key={solution.id}
          className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{solution.title}</h3>
              <p className="text-sm text-gray-500">{solution.description}</p>
            </div>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                solution.status === 'validated'
                  ? 'bg-green-100 text-green-800'
                  : solution.status === 'in_progress'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {solution.status === 'validated'
                ? '検証済み'
                : solution.status === 'in_progress'
                ? '検証中'
                : '未検証'}
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 mt-3">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {solution.testers}人が検証
            </div>
            <div className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1 text-green-500" />
              {solution.positiveResponses}
            </div>
            <div className="flex items-center">
              <ThumbsDown className="w-4 h-4 mr-1 text-red-500" />
              {solution.negativeResponses}
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              {solution.feedback.length}件のフィードバック
            </div>
          </div>

          <div className="mt-3">
            <div className="flex justify-between items-center text-sm mb-1">
              <span className="text-gray-500">検証進捗</span>
              <span className="font-medium text-gray-900">{solution.validation}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${solution.validation}%` }}
              />
            </div>
          </div>

          <div className="mt-3">
            <button
              onClick={() => toggleExpand(solution.id)}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              {expandedSolution === solution.id ? '詳細を閉じる' : '詳細を表示'}
            </button>
          </div>

          {expandedSolution === solution.id && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  主要機能
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {solution.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  フィードバック
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {solution.feedback.map((item, index) => (
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