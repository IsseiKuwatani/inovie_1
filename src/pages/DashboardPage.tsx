import React from 'react';
import { BarChart2, Users, Target, Layers } from 'lucide-react';
import PMFProgress from '../components/PMFProgress';
import PMFWorkflow from '../components/workflow/PMFWorkflow';

const stats = [
  {
    name: '実装機能数',
    value: '24/30',
    change: '+3',
    icon: Layers,
  },
  {
    name: 'インタビュー実施数',
    value: '89',
    change: '+12',
    icon: Users,
  },
  {
    name: 'PMF達成率',
    value: '68%',
    change: '+5%',
    icon: Target,
  },
  {
    name: '平均進捗率',
    value: '72%',
    change: '+8%',
    icon: BarChart2,
  },
];

const recentActivities = [
  {
    project: 'AI搭載営業支援システム',
    action: 'SPFフェーズに移行',
    date: '1時間前',
  },
  {
    project: 'AI搭載営業支援システム',
    action: '新規インタビュー追加',
    date: '3時間前',
  },
  {
    project: 'AI搭載営業支援システム',
    action: 'PMF評価完了',
    date: '5時間前',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-indigo-600" />
              <span className="text-green-600 text-sm font-medium">
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <PMFWorkflow />

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            最近のアクティビティ
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">{activity.project}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </div>
            ))}
          </div>
        </div>

        <PMFProgress onPhaseClick={() => {}} />
      </div>
    </div>
  );
}