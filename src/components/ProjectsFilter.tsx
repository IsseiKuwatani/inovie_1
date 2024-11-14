import React from 'react';
import { ListFilter, LayoutGrid, LayoutList } from 'lucide-react';

interface ProjectsFilterProps {
  filters: {
    status: string;
    phase: string;
    priority: string;
    search: string;
  };
  onFilterChange: (filters: any) => void;
  viewMode: 'list' | 'kanban';
  onViewModeChange: (mode: 'list' | 'kanban') => void;
}

export default function ProjectsFilter({
  filters,
  onFilterChange,
  viewMode,
  onViewModeChange,
}: ProjectsFilterProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <ListFilter className="w-5 h-5 text-gray-400 mr-2" />
          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
            className="form-select rounded-md border-gray-300"
          >
            <option value="all">全てのステータス</option>
            <option value="active">進行中</option>
            <option value="paused">一時停止</option>
            <option value="completed">完了</option>
          </select>
        </div>

        <select
          value={filters.phase}
          onChange={(e) => onFilterChange({ ...filters, phase: e.target.value })}
          className="form-select rounded-md border-gray-300"
        >
          <option value="all">全てのフェーズ</option>
          <option value="CPF">CPF</option>
          <option value="PSF">PSF</option>
          <option value="SPF">SPF</option>
          <option value="PMF">PMF</option>
        </select>

        <select
          value={filters.priority}
          onChange={(e) => onFilterChange({ ...filters, priority: e.target.value })}
          className="form-select rounded-md border-gray-300"
        >
          <option value="all">全ての優先度</option>
          <option value="high">高</option>
          <option value="medium">中</option>
          <option value="low">低</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => onViewModeChange('list')}
          className={`p-2 rounded-md ${
            viewMode === 'list'
              ? 'bg-indigo-100 text-indigo-600'
              : 'text-gray-400 hover:text-gray-500'
          }`}
        >
          <LayoutList className="w-5 h-5" />
        </button>
        <button
          onClick={() => onViewModeChange('kanban')}
          className={`p-2 rounded-md ${
            viewMode === 'kanban'
              ? 'bg-indigo-100 text-indigo-600'
              : 'text-gray-400 hover:text-gray-500'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}