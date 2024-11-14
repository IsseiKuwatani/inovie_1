import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: '4月', customers: 120, revenue: 6000000, cac: 45000 },
  { month: '5月', customers: 165, revenue: 8250000, cac: 42000 },
  { month: '6月', customers: 220, revenue: 11000000, cac: 40000 },
  { month: '7月', customers: 285, revenue: 14250000, cac: 38000 },
  { month: '8月', customers: 360, revenue: 18000000, cac: 35000 },
  { month: '9月', customers: 450, revenue: 22500000, cac: 33000 },
];

export default function MetricsPanel() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">成長指標の推移</h2>
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
  );
}