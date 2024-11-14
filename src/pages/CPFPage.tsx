import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ProblemList from '../components/problems/ProblemList';
import InterviewList from '../components/interviews/InterviewList';
import ProblemModal from '../components/problems/ProblemModal';
import InterviewModal from '../components/interviews/InterviewModal';

export default function CPFPage() {
  const [activeTab, setActiveTab] = useState<'problems' | 'interviews'>('problems');
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('problems')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'problems'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            課題管理
          </button>
          <button
            onClick={() => setActiveTab('interviews')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'interviews'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            インタビュー管理
          </button>
        </div>
        <button
          onClick={() => activeTab === 'problems' ? setIsProblemModalOpen(true) : setIsInterviewModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-1" />
          {activeTab === 'problems' ? '課題を追加' : 'インタビューを追加'}
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">全て</option>
          {activeTab === 'problems' ? (
            <>
              <option value="high">影響度：大</option>
              <option value="medium">影響度：中</option>
              <option value="low">影響度：小</option>
            </>
          ) : (
            <>
              <option value="scheduled">予定</option>
              <option value="completed">完了</option>
            </>
          )}
        </select>
        <input
          type="text"
          placeholder={activeTab === 'problems' ? '課題を検索...' : 'インタビューを検索...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {activeTab === 'problems' ? (
        <ProblemList filter={filter} searchQuery={searchQuery} />
      ) : (
        <InterviewList filter={filter} searchQuery={searchQuery} />
      )}

      <ProblemModal
        isOpen={isProblemModalOpen}
        onClose={() => setIsProblemModalOpen(false)}
      />
      <InterviewModal
        isOpen={isInterviewModalOpen}
        onClose={() => setIsInterviewModalOpen(false)}
      />
    </div>
  );
}