import React from 'react';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';
import MarketingChannels from '../components/gtm/MarketingChannels';
import GrowthStrategy from '../components/gtm/GrowthStrategy';
import MetricsPanel from '../components/gtm/MetricsPanel';

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

export default function GTMPage() {
  return (
    <div className="space-y-6">
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
        <div>
          <MetricsPanel />
          <div className="mt-6">
            <GrowthStrategy />
          </div>
        </div>
        <MarketingChannels />
      </div>
    </div>
  );
}