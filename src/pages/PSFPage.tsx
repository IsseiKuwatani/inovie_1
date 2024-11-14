import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SolutionList from '../components/solutions/SolutionList';
import PrototypeList from '../components/prototypes/PrototypeList';
import SolutionModal from '../components/solutions/SolutionModal';
import PrototypeModal from '../components/prototypes/PrototypeModal';

export default function PSFPage() {
  const [activeTab, setActiveTab] = useState<'solutions' | 'prototypes'>('solutions');
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
  const [isPrototypeModalOpen, setIsPrototypeModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'solutions'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            解決策管理
          </button>
          <button
            onClick={() => setActiveTab('prototypes')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'prototypes'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            プロトタイプ管理
          </button>
        </div>
        <button
          onClick={() => activeTab === 'solutions' ? setIsSolutionModalOpen(true) : setIsPrototypeModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-1" />
          {activeTab === 'solutions' ? '解決策を追加' : 'プロトタイプを追加'}
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">全て</option>
          {activeTab === 'solutions' ? (
            <>
              <option value="validated">検証済み</option>
              <option value="in_progress">検証中</option>
              <option value="planned">未検証</option>
            </>
          ) : (
            <>
              <option value="completed">完了</option>
              <option value="in_progress">進行中</option>
            </>
          )}
        </select>
        <input
          type="text"
          placeholder={activeTab === 'solutions' ? '解決策を検索...' : 'プロトタイプを検索...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {activeTab === 'solutions' ? (
        <SolutionList filter={filter} searchQuery={searchQuery} />
      ) : (
        <PrototypeList />
      )}

      <SolutionModal
        isOpen={isSolutionModalOpen}
        onClose={() => setIsSolutionModalOpen(false)}
      />
      <PrototypeModal
        isOpen={isPrototypeModalOpen}
        onClose={() => setIsPrototypeModalOpen(false)}
      />
    </div>
  );
}