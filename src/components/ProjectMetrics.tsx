import React from 'react';
import { TrendingUp, Users, Target, BarChart2 } from 'lucide-react';

interface ProjectMetricsProps {
  metrics: {
    marketSize: string;
    targetUsers: string;
    problemValidation: string;
    solutionFit: string;
    customerInterviews: number;
    mvpProgress: number;
    userSatisfaction: number;
  };
}

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">プロジェクト指標</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-gray-500">市場規模</span>
            </div>
            <p className="text-lg font-semibold text-gray-900">{metrics.marketSize}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <Users className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-gray-500">インタビュー数</span>
            </div>
            <p className="text-lg font-semibold text-gray-900">{metrics.customerInterviews}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">課題検証</span>
              <span className="text-sm font-medium text-gray-900">{metrics.problemValidation}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: metrics.problemValidation }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">MVP進捗</span>
              <span className="text-sm font-medium text-gray-900">{metrics.mvpProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${metrics.mvpProgress}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">ユーザー満足度</span>
              <span className="text-sm font-medium text-gray-900">{metrics.userSatisfaction}/5.0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${(metrics.userSatisfaction / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <Target className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-gray-500">ターゲットユーザー</span>
          </div>
          <p className="text-sm font-medium text-gray-900">{metrics.targetUsers}</p>
        </div>
      </div>
    </div>
  );
}