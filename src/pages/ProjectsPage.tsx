import React, { useState } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import NewProjectModal from '../components/NewProjectModal';
import ProjectsFilter from '../components/ProjectsFilter';
import ProjectsKanban from '../components/ProjectsKanban';

interface ProjectsPageProps {
  onProjectSelect: (projectId: string) => void;
}

export const projects = [
  {
    id: 'project1',
    name: 'AI搭載営業支援システム',
    description: '営業活動の効率化と顧客インサイトの分析を実現する次世代営業支援プラットフォーム',
    progress: 75,
    phase: 'SPF',
    status: 'active',
    priority: 'high',
    lastUpdated: '2024/03/20',
    team: ['山田太郎', '鈴木一郎', '田中花子'],
    metrics: {
      marketSize: '2000億円',
      targetUsers: '大手企業の営業部門',
      problemValidation: '85%',
      solutionFit: '72%',
    },
    tags: ['AI/ML', 'SaaS', 'B2B'],
  },
  {
    id: 'project2',
    name: 'デジタル契約管理システム',
    description: 'ブロックチェーンを活用した次世代の契約管理・電子署名プラットフォーム',
    progress: 45,
    phase: 'PSF',
    status: 'active',
    priority: 'medium',
    lastUpdated: '2024/03/19',
    team: ['佐藤次郎', '高橋五郎'],
    metrics: {
      marketSize: '500億円',
      targetUsers: '中小企業全般',
      problemValidation: '92%',
      solutionFit: '45%',
    },
    tags: ['Blockchain', 'LegalTech', 'B2B'],
  },
  {
    id: 'project3',
    name: 'ヘルスケアIoTプラットフォーム',
    description: 'IoTデバイスとAIを活用した健康管理・予防医療支援システム',
    progress: 90,
    phase: 'PMF',
    status: 'completed',
    priority: 'high',
    lastUpdated: '2024/03/18',
    team: ['渡辺実', '小林誠'],
    metrics: {
      marketSize: '3000億円',
      targetUsers: '医療機関・一般消費者',
      problemValidation: '95%',
      solutionFit: '88%',
    },
    tags: ['Healthcare', 'IoT', 'B2B2C'],
  },
];

export default function ProjectsPage({ onProjectSelect }: ProjectsPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectsList, setProjectsList] = useState(projects);
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');
  const [filters, setFilters] = useState({
    status: 'all',
    phase: 'all',
    priority: 'all',
    search: '',
  });

  const handleCreateProject = (newProject: any) => {
    const projectWithId = {
      ...newProject,
      id: `project${projectsList.length + 1}`,
      progress: 0,
      phase: 'CPF',
      status: 'active',
      lastUpdated: new Date().toLocaleDateString(),
      metrics: {
        marketSize: '未定',
        targetUsers: '未定',
        problemValidation: '0%',
        solutionFit: '0%',
      },
    };
    setProjectsList([...projectsList, projectWithId]);
    setIsModalOpen(false);
  };

  const filteredProjects = projectsList.filter(project => {
    if (filters.status !== 'all' && project.status !== filters.status) return false;
    if (filters.phase !== 'all' && project.phase !== filters.phase) return false;
    if (filters.priority !== 'all' && project.priority !== filters.priority) return false;
    if (filters.search && !project.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">プロジェクトポートフォリオ</h2>
          <p className="text-gray-500 mt-1">新規事業開発の進捗状況と成果指標の管理</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="プロジェクトを検索..."
              className="ml-2 outline-none"
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            新規プロジェクト
          </button>
        </div>
      </div>

      <ProjectsFilter
        filters={filters}
        onFilterChange={setFilters}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {viewMode === 'list' ? (
        <div className="grid gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onProjectSelect}
            />
          ))}
        </div>
      ) : (
        <ProjectsKanban
          projects={filteredProjects}
          onProjectSelect={onProjectSelect}
        />
      )}

      <NewProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
    </div>
  );
}