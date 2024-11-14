import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Users, AlertCircle, TrendingUp, Target, CheckCircle } from 'lucide-react';

interface Problem {
  id: number;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  validation: number;
  interviews: number;
  positiveResponses: number;
  negativeResponses: number;
  insights: string[];
  status: 'validated' | 'in_progress' | 'planned';
  metrics: {
    painLevel: number;
    frequency: number;
    marketSize: string;
  };
  validationMethods: string[];
  nextSteps: string[];
}

const INTERVIEW_GOAL = 20;

const problems: Problem[] = [
  {
    id: 1,
    title: '営業活動の非効率性',
    description: '商談記録の入力や顧客情報の管理に多くの時間を要している',
    impact: 'high',
    validation: 92,
    interviews: 15,
    positiveResponses: 12,
    negativeResponses: 3,
    status: 'validated',
    insights: [
      '手作業での入力に1日2時間以上費やしている',
      'データの正確性に課題がある',
      'リアルタイムな情報共有ができていない',
    ],
    metrics: {
      painLevel: 9,
      frequency: 5,
      marketSize: '2000億円',
    },
    validationMethods: [
      'カスタマーインタビュー',
      'ユーザー行動分析',
      'コンペティター分析',
    ],
    nextSteps: [
      'プロトタイプの作成',
      'ベータテスターの募集',
      'MVP開発計画の策定',
    ],
  },
  {
    id: 2,
    title: '顧客インサイトの不足',
    description: '顧客ニーズの変化や潜在的なニーズを把握できていない',
    impact: 'medium',
    validation: 88,
    interviews: 12,
    positiveResponses: 9,
    negativeResponses: 3,
    status: 'in_progress',
    insights: [
      'データ分析の基盤が整っていない',
      '顧客フィードバックの収集が体系化されていない',
    ],
    metrics: {
      painLevel: 7,
      frequency: 4,
      marketSize: '500億円',
    },
    validationMethods: [
      'アンケート調査',
      'データ分析',
      'フィールドリサーチ',
    ],
    nextSteps: [
      '追加インタビューの実施',
      'データ分析基盤の構築',
      'フィードバックシステムの設計',
    ],
  },
];

interface ProblemListProps {
  filter?: string;
  searchQuery?: string;
}

export default function ProblemList({ filter = 'all', searchQuery = '' }: ProblemListProps) {
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);

  const toggleExpand = (problemId: number) => {
    setExpandedProblem(expandedProblem === problemId ? null : problemId);
  };

  const filteredProblems = problems
    .filter(problem => {
      if (filter === 'all') return true;
      return problem.impact === filter;
    })
    .filter(problem => {
      if (!searchQuery) return true;
      return (
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  const getValidationStatus = (validation: number) => {
    if (validation >= 80) return 'bg-green-100 text-green-800';
    if (validation >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const calculateInterviewProgress = (interviews: number) => {
    return Math.round((interviews / INTERVIEW_GOAL) * 100);
  };

  const calculateEmpathyRate = (positive: number, negative: number) => {
    const total = positive + negative;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  return (
    <div className="space-y-4">
      {filteredProblems.map((problem) => (
        <div
          key={problem.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{problem.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{problem.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    problem.impact === 'high'
                      ? 'bg-red-100 text-red-800'
                      : problem.impact === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  影響度: {problem.impact === 'high' ? '大' : problem.impact === 'medium' ? '中' : '小'}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getValidationStatus(problem.validation)}`}>
                  検証度: {problem.validation}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{problem.interviews}件のインタビュー</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">{problem.positiveResponses}件の共感</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsDown className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-600">{problem.negativeResponses}件の非共感</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-indigo-500" />
                <span className="text-sm text-gray-600">{problem.insights.length}件のインサイト</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600">課題深刻度: {problem.metrics.painLevel}/10</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600">発生頻度: {problem.metrics.frequency}/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-gray-600">市場規模: {problem.metrics.marketSize}</span>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => toggleExpand(problem.id)}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                {expandedProblem === problem.id ? '詳細を閉じる' : '詳細を表示'}
              </button>
            </div>

            {expandedProblem === problem.id && (
              <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">主要なインサイト</h4>
                  <ul className="space-y-2">
                    {problem.insights.map((insight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-600">{insight}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-sm font-medium text-gray-900 mt-4 mb-2">検証方法</h4>
                  <ul className="space-y-2">
                    {problem.validationMethods.map((method, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">次のステップ</h4>
                  <ul className="space-y-2">
                    {problem.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">検証ステータス</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>インタビュー目標達成率</span>
                          <span>{calculateInterviewProgress(problem.interviews)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${calculateInterviewProgress(problem.interviews)}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>共感率</span>
                          <span>
                            {calculateEmpathyRate(problem.positiveResponses, problem.negativeResponses)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{
                              width: `${calculateEmpathyRate(
                                problem.positiveResponses,
                                problem.negativeResponses
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}