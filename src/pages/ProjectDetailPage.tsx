import React, { useState } from 'react';
import { ArrowLeft, Users, Target, Code2, BarChart2, CheckCircle, Circle } from 'lucide-react';
import PhaseDetails from '../components/phases/PhaseDetails';
import ProjectOverview from '../components/ProjectOverview';
import ProjectTeam from '../components/ProjectTeam';
import ProjectMetrics from '../components/ProjectMetrics';

interface ProjectDetailPageProps {
  projectId: string;
  onBack: () => void;
}

type Phase = 'cpf' | 'psf' | 'spf' | 'pmf';

const phases = [
  {
    id: 'cpf',
    name: 'CPF',
    description: 'カスタマープロブレムフィット',
    icon: Users,
  },
  {
    id: 'psf',
    name: 'PSF',
    description: 'プロブレムソリューションフィット',
    icon: Target,
  },
  {
    id: 'spf',
    name: 'SPF',
    description: 'ソリューションプロダクトフィット',
    icon: Code2,
  },
  {
    id: 'pmf',
    name: 'PMF',
    description: 'プロダクトマーケットフィット',
    icon: BarChart2,
  },
];

export default function ProjectDetailPage({ projectId, onBack }: ProjectDetailPageProps) {
  const [currentPhase, setCurrentPhase] = useState<Phase>('cpf');
  const [activeTab, setActiveTab] = useState<'overview' | 'phase'>('overview');

  // この部分は実際のプロジェクトデータをAPIから取得する想定
  const projectData = {
    id: projectId,
    name: 'AI搭載営業支援システム',
    description: '営業活動の効率化と顧客インサイトの分析を実現する次世代営業支援プラットフォーム',
    progress: 75,
    phase: 'SPF',
    status: 'active',
    priority: 'high',
    startDate: '2024/01/15',
    targetDate: '2024/12/31',
    budget: '5000万円',
    team: [
      { name: '山田太郎', role: 'プロジェクトマネージャー', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { name: '鈴木一郎', role: '開発リーダー', image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { name: '田中花子', role: 'デザイナー', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    ],
    metrics: {
      marketSize: '2000億円',
      targetUsers: '大手企業の営業部門',
      problemValidation: '85%',
      solutionFit: '72%',
      customerInterviews: 45,
      mvpProgress: 68,
      userSatisfaction: 4.2,
    },
    phases: {
      cpf: {
        progress: 100,
        completed: true,
        interviews: 25,
        problems: 8,
        validatedProblems: 6,
      },
      psf: {
        progress: 100,
        completed: true,
        solutions: 5,
        prototypes: 3,
        validatedSolutions: 2,
      },
      spf: {
        progress: 65,
        completed: false,
        features: 12,
        completedFeatures: 8,
        userTests: 15,
      },
      pmf: {
        progress: 20,
        completed: false,
        activeUsers: 50,
        retentionRate: '68%',
        nps: 45,
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          プロジェクト一覧に戻る
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'overview'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            プロジェクト概要
          </button>
          <button
            onClick={() => setActiveTab('phase')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'phase'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            フェーズ詳細
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div className="space-y-6">
          <ProjectOverview project={projectData} />
          <div className="grid grid-cols-2 gap-6">
            <ProjectTeam team={projectData.team} />
            <ProjectMetrics metrics={projectData.metrics} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">フェーズ一覧</h2>
            <div className="space-y-2">
              {phases.map((phase) => {
                const phaseData = projectData.phases[phase.id as Phase];
                return (
                  <button
                    key={phase.id}
                    onClick={() => setCurrentPhase(phase.id as Phase)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentPhase === phase.id
                        ? 'bg-indigo-50 border-l-4 border-indigo-500'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <phase.icon className="w-5 h-5 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-900">
                          {phase.name}
                        </span>
                      </div>
                      {phaseData.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="text-sm font-medium text-gray-500">
                          {phaseData.progress}%
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-span-3">
            <PhaseDetails
              phase={currentPhase}
              phaseData={projectData.phases[currentPhase]}
              projectId={projectId}
            />
          </div>
        </div>
      )}
    </div>
  );
}