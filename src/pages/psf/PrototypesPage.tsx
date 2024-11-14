import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PrototypeList from '../../components/prototypes/PrototypeList';
import PrototypeModal from '../../components/prototypes/PrototypeModal';

export default function PrototypesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">プロトタイプ管理</h2>
          <p className="text-sm text-gray-500">
            解決策の検証のためのプロトタイプ作成と評価
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          プロトタイプを追加
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">全てのプロトタイプ</option>
          <option value="completed">完了</option>
          <option value="in_progress">進行中</option>
        </select>
        <input
          type="text"
          placeholder="プロトタイプを検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <PrototypeList />

      <PrototypeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}