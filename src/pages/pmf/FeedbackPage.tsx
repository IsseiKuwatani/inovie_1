import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import UserFeedback from '../../components/pmf/UserFeedback';
import FeedbackModal from '../../components/pmf/FeedbackModal';

export default function FeedbackPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">フィードバック管理</h2>
          <p className="text-sm text-gray-500">
            ユーザーフィードバックの収集と分析
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          フィードバックを追加
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">全てのフィードバック</option>
          <option value="positive">ポジティブ</option>
          <option value="negative">ネガティブ</option>
          <option value="suggestion">提案</option>
        </select>
        <input
          type="text"
          placeholder="フィードバックを検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <UserFeedback filter={filter} searchQuery={searchQuery} />

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}