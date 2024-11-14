import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
}

export default function KPICard({ title, value, change, changeType }: KPICardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <span
          className={`ml-2 text-sm font-medium flex items-center ${
            changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {changeType === 'increase' ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          {change}%
        </span>
      </div>
    </div>
  );
}