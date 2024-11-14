import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import MetricsPanel from '../components/pmf/MetricsPanel';
import CustomerSegments from '../components/pmf/CustomerSegments';
import UserFeedback from '../components/pmf/UserFeedback';
import FeedbackModal from '../components/pmf/FeedbackModal';

export default function PMFPage() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <MetricsPanel />
        <CustomerSegments />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
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
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={() => setIsFeedbackModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="w-4 h-4 mr-1" />
            フィードバックを追加
          </button>
        </div>

        <UserFeedback filter={filter} searchQuery={searchQuery} />
      </div>

      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </div>
  );
}