import React from 'react';
import { Calendar, DollarSign, Clock, Flag } from 'lucide-react';

interface ProjectOverviewProps {
  project: any;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
          <p className="text-gray-500 mt-1">{project.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'active'
                ? 'bg-green-100 text-green-800'
                : project.status === 'paused'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {project.status === 'active'
              ? '進行中'
              : project.status === 'paused'
              ? '一時停止'
              : '完了'}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.priority === 'high'
                ? 'bg-red-100 text-red-800'
                : project.priority === 'medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            優先度: {project.priority === 'high' ? '高' : project.priority === 'medium' ? '中' : '低'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">開始日</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{project.startDate}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Flag className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">目標期日</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{project.targetDate}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">予算</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{project.budget}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">進捗</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{project.progress}%</p>
        </div>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
              プロジェクト進捗
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-indigo-600">
              {project.progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
          <div
            style={{ width: `${project.progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
          />
        </div>
      </div>
    </div>
  );
}