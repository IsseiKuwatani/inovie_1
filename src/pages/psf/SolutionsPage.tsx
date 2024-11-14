import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SolutionList from '../../components/solutions/SolutionList';
import SolutionModal from '../../components/solutions/SolutionModal';

export default function SolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">解決策管理</h2>
          <p className="text-sm text-gray-500">
            特定された課題に対する解決策の検討と検証
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          解決策を追加
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">全ての解決策</option>
          <option value="validated">検証済み</option>
          <option value="in_progress">検証中</option>
          <option value="planned">未検証</option>
        </select>
        <input
          type="text"
          placeholder="解決策を検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <SolutionList filter={filter} searchQuery={searchQuery} />

      <SolutionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}