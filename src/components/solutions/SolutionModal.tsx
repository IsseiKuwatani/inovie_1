import React, { useState } from 'react';
import { X, Plus, Trash } from 'lucide-react';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionModal({ isOpen, onClose }: SolutionModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    features: [''],
    targetProblems: [''],
    implementation: 'easy',
    costEstimate: '',
    timeEstimate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 解決策データの保存処理
    onClose();
  };

  const addItem = (field: 'features' | 'targetProblems') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const updateItem = (field: 'features' | 'targetProblems', index: number, value: string) => {
    const newItems = [...formData[field]];
    newItems[index] = value;
    setFormData(prev => ({
      ...prev,
      [field]: newItems,
    }));
  };

  const removeItem = (field: 'features' | 'targetProblems', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">解決策の追加</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              解決策タイトル
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              解決策の説明
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              主要機能
            </label>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => updateItem('features', index, e.target.value)}
                    placeholder={`機能 ${index + 1}`}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('features', index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addItem('features')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              機能を追加
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              対象となる課題
            </label>
            <div className="space-y-2">
              {formData.targetProblems.map((problem, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={problem}
                    onChange={(e) => updateItem('targetProblems', index, e.target.value)}
                    placeholder={`課題 ${index + 1}`}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.targetProblems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('targetProblems', index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addItem('targetProblems')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              課題を追加
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                実装の難易度
              </label>
              <select
                value={formData.implementation}
                onChange={(e) => setFormData(prev => ({ ...prev, implementation: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="easy">容易</option>
                <option value="medium">中程度</option>
                <option value="hard">困難</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                概算コスト
              </label>
              <input
                type="text"
                value={formData.costEstimate}
                onChange={(e) => setFormData(prev => ({ ...prev, costEstimate: e.target.value }))}
                placeholder="例: ¥1,000,000"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                開発期間
              </label>
              <input
                type="text"
                value={formData.timeEstimate}
                onChange={(e) => setFormData(prev => ({ ...prev, timeEstimate: e.target.value }))}
                placeholder="例: 2ヶ月"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}