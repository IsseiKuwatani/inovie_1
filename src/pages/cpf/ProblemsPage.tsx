import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ProblemList from '../../components/problems/ProblemList';
import ProblemModal from '../../components/problems/ProblemModal';

export default function ProblemsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">課題管理</h2>
          <p className="text-sm text-gray-500">
            インタビューから抽出した課題の管理と検証
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          課題を追加
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">全ての課題</option>
          <option value="high">影響度：大</option>
          <option value="medium">影響度：中</option>
          <option value="low">影響度：小</option>
        </select>
        <input
          type="text"
          placeholder="課題を検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <ProblemList />

      <ProblemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}