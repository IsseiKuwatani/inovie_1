import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: '4月', users: 850, retention: 75, nps: 35 },
  { month: '5月', users: 920, retention: 78, nps: 38 },
  { month: '6月', users: 1000, retention: 80, nps: 40 },
  { month: '7月', users: 1100, retention: 82, nps: 42 },
  { month: '8月', users: 1180, retention: 84, nps: 43 },
  { month: '9月', users: 1250, retention: 85, nps: 45 },
];

export default function MetricsPanel() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">主要指標の推移</h2>
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
  );
}