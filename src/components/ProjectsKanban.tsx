import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

interface ProjectsKanbanProps {
  projects: any[];
  onProjectSelect: (projectId: string) => void;
}

const phases = [
  { id: 'CPF', name: 'CPF', description: 'カスタマープロブレムフィット' },
  { id: 'PSF', name: 'PSF', description: 'プロブレムソリューションフィット' },
  { id: 'SPF', name: 'SPF', description: 'ソリューションプロダクトフィット' },
  { id: 'PMF', name: 'PMF', description: 'プロダクトマーケットフィット' },
];

export default function ProjectsKanban({ projects, onProjectSelect }: ProjectsKanbanProps) {
  const getProjectsByPhase = (phase: string) => {
    return projects.filter(project => project.phase === phase);
  };

  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {phases.map(phase => (
        <div key={phase.id} className="flex-1 min-w-[300px]">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{phase.name}</h3>
                <p className="text-sm text-gray-500">{phase.description}</p>
              </div>
              <span className="px-2 py-1 text-sm font-medium bg-white rounded-full">
                {getProjectsByPhase(phase.id).length}
              </span>
            </div>
            <div className="space-y-3">
              {getProjectsByPhase(phase.id).map(project => (
                <div
                  key={project.id}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => onProjectSelect(project.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{project.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.priority === 'high'
                        ? 'bg-red-100 text-red-800'
                        : project.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.priority === 'high' ? '優先度：高' : project.priority === 'medium' ? '優先度：中' : '優先度：低'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member: string, index: number) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                        >
                          {member.charAt(0)}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">{project.progress}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}