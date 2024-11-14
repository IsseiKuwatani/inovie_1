import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, Target, BarChart2 } from 'lucide-react';

const metrics = [
  {
    title: 'アクティブユーザー',
    value: '1,250',
    change: '+12%',
    target: '2,000',
    icon: Users,
  },
  {
    title: '継続率',
    value: '85%',
    change: '+5%',
    target: '90%',
    icon: TrendingUp,
  },
  {
    title: 'NPS',
    value: '45',
    change: '+8',
    target: '50',
    icon: Target,
  },
  {
    title: 'ユーザー満足度',
    value: '4.2/5.0',
    change: '+0.3',
    target: '4.5/5.0',
    icon: BarChart2,
  },
];

const data = [
  { month: '4月', users: 850, retention: 75, nps: 35 },
  { month: '5月', users: 920, retention: 78, nps: 38 },
  { month: '6月', users: 1000, retention: 80, nps: 40 },
  { month: '7月', users: 1100, retention: 82, nps: 42 },
  { month: '8月', users: 1180, retention: 84, nps: 43 },
  { month: '9月', users: 1250, retention: 85, nps: 45 },
];

const userSegments = [
  {
    name: '大手企業',
    users: 450,
    growth: '+12%',
    retention: '88%',
    satisfaction: 4.3,
  },
  {
    name: '中小企業',
    users: 580,
    growth: '+18%',
    retention: '82%',
    satisfaction: 4.1,
  },
  {
    name: 'スタートアップ',
    users: 220,
    growth: '+25%',
    retention: '78%',
    satisfaction: 4.0,
  },
];

export default function MetricsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">指標管理</h2>
        <p className="text-sm text-gray-500">
          PMF達成度を測定する主要指標の管理
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.title} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <metric.icon className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium text-gray-500">{metric.title}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-medium text-green-600">
                {metric.change}
              </span>
              <span className="text-sm text-gray-500">
                目標: {metric.target}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">主要指標の推移</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="users"
                  name="アクティブユーザー"
                  stroke="#4F46E5"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="retention"
                  name="継続率"
                  stroke="#10B981"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="nps"
                  name="NPS"
                  stroke="#F59E0B"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">セグメント分析</h3>
          <div className="space-y-4">
            {userSegments.map((segment) => (
              <div
                key={segment.name}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{segment.name}</h4>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {segment.users}ユーザー
                      <span className="text-green-600 ml-2">{segment.growth}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-${
                          star <= segment.satisfaction ? 'yellow' : 'gray'
                        }-400`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-indigo-600 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">継続率</p>
                      <p className="font-medium text-gray-900">{segment.retention}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BarChart2 className="w-4 h-4 text-indigo-600 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">満足度</p>
                      <p className="font-medium text-gray-900">{segment.satisfaction}/5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">PMF達成基準</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Must-have率</h4>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">現在の値</span>
              <span className="text-sm font-medium text-gray-900">42%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: '42%' }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              目標: 40%以上のユーザーが「なくてはならない」と回答
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">継続利用率</h4>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">現在の値</span>
              <span className="text-sm font-medium text-gray-900">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: '85%' }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              目標: 月間継続率80%以上を維持
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">推奨度（NPS）</h4>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">現在の値</span>
              <span className="text-sm font-medium text-gray-900">45</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: '90%' }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              目標: NPS 40以上を達成
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}