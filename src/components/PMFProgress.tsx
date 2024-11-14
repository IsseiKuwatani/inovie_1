import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface PMFProgressProps {
  onPhaseClick: (phase: 'cpf' | 'psf' | 'spf' | 'pmf' | 'gtm') => void;
}

const phases = [
  {
    id: 'cpf',
    name: 'CPF',
    description: 'カスタマープロブレムフィット',
    completed: true,
    progress: 100,
  },
  {
    id: 'psf',
    name: 'PSF',
    description: 'プロブレムソリューションフィット',
    completed: true,
    progress: 100,
  },
  {
    id: 'spf',
    name: 'SPF',
    description: 'ソリューションプロダクトフィット',
    completed: false,
    progress: 65,
  },
  {
    id: 'pmf',
    name: 'PMF',
    description: 'プロダクトマーケットフィット',
    completed: false,
    progress: 20,
  },
  {
    id: 'gtm',
    name: 'GTM',
    description: 'Go To Market',
    completed: false,
    progress: 0,
  },
];

export default function PMFProgress({ onPhaseClick }: PMFProgressProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">PMFプロセス進捗</h2>
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <button
            key={index}
            className="w-full text-left"
            onClick={() => onPhaseClick(phase.id as 'cpf' | 'psf' | 'spf' | 'pmf' | 'gtm')}
          >
            <div className="relative group">
              <div className="flex items-center mb-2">
                {phase.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300" />
                )}
                <span className="ml-2 font-medium text-gray-900 group-hover:text-indigo-600">
                  {phase.name}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {phase.description}
                </span>
                <span className="ml-auto text-sm font-medium text-gray-900">
                  {phase.progress}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 rounded-full bg-indigo-600 group-hover:bg-indigo-500 transition-all"
                  style={{ width: `${phase.progress}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}