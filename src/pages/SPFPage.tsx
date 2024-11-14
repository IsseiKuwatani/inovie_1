import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import FeatureList from '../components/features/FeatureList';
import FeatureModal from '../components/features/FeatureModal';

export default function SPFPage() {
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">全ての機能</option>
            <option value="completed">完了</option>
            <option value="in_progress">開発中</option>
            <option value="planned">計画中</option>
          </select>
          <input
            type="text"
            placeholder="機能を検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={() => setIsFeatureModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-1" />
          機能を追加
        </button>
      </div>

      <FeatureList filter={filter} searchQuery={searchQuery} />

      <FeatureModal
        isOpen={isFeatureModalOpen}
        onClose={() => setIsFeatureModalOpen(false)}
      />
    </div>
  );
}