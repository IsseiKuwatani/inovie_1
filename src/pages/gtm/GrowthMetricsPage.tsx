import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

const metrics = [
  {
    title: '市場浸透率',
    value: '12%',
    change: '+2.5%',
    target: '20%',
    icon: Target,
  },
  {
    title: '月間獲得顧客数',
    value: '45',
    change: '+8',
    target: '100',
    icon: Users,
  },
  {
    title: 'CAC',
    value: '¥50,000',
    change: '-5%',
    target: '¥45,000',
    icon: DollarSign,
  },
  {
    title: 'LTV',
    value: '¥750,000',
    change: '+12%',
    target: '¥800,000',
    icon: TrendingUp,
  },
];

const data = [
  { month: '4月', customers: 120, revenue: 6000000, cac: 45000 },
  { month: '5月', customers: 165, revenue: 8250000, cac: 42000 },
  { month: '6月', customers: 220, revenue: 11000000, cac: 40000 },
  { month: '7月', customers: 285, revenue: 14250000, cac: 38000 },
  { month: '8月', customers: 360, revenue: 18000000, cac: 35000 },
  { month: '9月', customers: 450, revenue: 22500000, cac: 33000 },
];

const cohortData = [
  {
    cohort: '2024/01',
    users: 100,
    retention: [100, 85, 75, 70, 68, 65],
  },
  {
    cohort: '2024/02',
    users: 120,
    retention: [100, 88, 78, 72, 70],
  },
  {
    cohort: '2024/03',
    users: 150,
    retention: [100, 90, 82, 75],
  },
  {
    cohort: '2024/04',
    users: 180,
    retention: [100, 92, 85],
  },
  {
    cohort: '2024/05',
    users: 220,
    retention: [100, 95],
  },
  {
    cohort: '2024/06',
    users: 250,
    retention: [100],
  },
];

export default function GrowthMetricsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">成長指標</h2>
        <p className="text-sm text-gray-500">
          成長に関する主要指標の分析とトラッキング
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
              <span className={`text-sm font-medium ${
                metric.change.startsWith('+') 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">成長指標の推移</h3>
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
                  dataKey="customers"
                  name="顧客数"
                  stroke="#4F46E5"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  name="売上"
                  stroke="#10B981"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="cac"
                  name="顧客獲得コスト"
                  stroke="#F59E0B"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">コホート分析</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">コホート</th>
                  <th className="px-4 py-2 text-right text-sm font-medium text-gray-500">ユーザー数</th>
                  {[1, 2, 3, 4, 5, 6].map((month) => (
                    <th key={month} className="px-4 py-2 text-right text-sm font-medium text-gray-500">
                      {month}ヶ月目
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cohortData.map((row) => (
                  <tr key={row.cohort} className="border-t border-gray-200">
                    <td className="px-4 py-2 text-sm text-gray-900">{row.cohort}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 text-right">{row.users}</td>
                    {row.retention.map((value, index) => (
                      <td
                        key={index}
                        className="px-4 py-2 text-sm text-right"
                        style={{
                          background: `rgba(79, 70, 229, ${value / 100 * 0.2})`,
                          color: value >= 80 ? '#1E40AF' : '#4F46E5',
                        }}
                      >
                        {value}%
                      </td>
                    ))}
                    {Array(6 - row.retention.length).fill(null).map((_, index) => (
                      <td key={`empty-${index}`} className="px-4 py-2" />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">成長目標</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">市場シェア</h4>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">現在の値</span>
              <span className="text-sm font-medium text-gray-900">12%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: '60%' }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              目標: 2024年末までに20%達成
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">月間売上</h4>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">現在の値</span>
              <span className="text-sm font-medium text-gray-900">2.25億円</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: '75%' }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              目標: 2024年末までに3億円達成
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">顧客数</h4>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">現在の値</span>
              <span className="text-sm font-medium text-gray-900">450</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: '45%' }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              目標: 2024年末までに1,000社達成
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}