import React from 'react';
import { ArrowRight, Users, Target, Code2, BarChart2, Calendar, Tag } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  phase: string;
  status: string;
  priority: string;
  lastUpdated: string;
  team: string[];
  metrics: {
    marketSize: string;
    targetUsers: string;
    problemValidation: string;
    solutionFit: string;
  };
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  onSelect: (projectId: string) => void;
}

const getPhaseIcon = (phase: string) => {
  switch (phase) {
    case 'CPF':
      return Users;
    case 'PSF':
      return Target;
    case 'SPF':
      return Code2;
    case 'PMF':
      return BarChart2;
    default:
      return Target;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const PhaseIcon = getPhaseIcon(project.phase);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                {project.priority === 'high' ? '優先度：高' : project.priority === 'medium' ? '優先度：中' : '優先度：低'}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{project.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <PhaseIcon className="w-5 h-5 text-indigo-600" />
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.phase === 'PMF'
                ? 'bg-green-100 text-green-800'
                : project.phase === 'SPF'
                ? 'bg-blue-100 text-blue-800'
                : project.phase === 'PSF'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {project.phase}フェーズ
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">市場規模</p>
            <p className="text-lg font-semibold text-gray-900">{project.metrics.marketSize}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">ターゲット</p>
            <p className="text-lg font-semibold text-gray-900">{project.metrics.targetUsers}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">課題検証</p>
            <p className="text-lg font-semibold text-gray-900">{project.metrics.problemValidation}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">ソリューション適合度</p>
            <p className="text-lg font-semibold text-gray-900">{project.metrics.solutionFit}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              {project.team.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                >
                  {member.charAt(0)}
                </div>
              ))}
            </div>
            {project.team.length > 3 && (
              <span className="text-sm text-gray-500">+{project.team.length - 3}</span>
            )}
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {project.lastUpdated}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => onSelect(project.id)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              詳細を見る
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}