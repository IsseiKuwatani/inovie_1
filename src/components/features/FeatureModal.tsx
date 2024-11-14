import React, { useState } from 'react';
import { X, Plus, Trash } from 'lucide-react';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeatureModal({ isOpen, onClose }: FeatureModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assignee: '',
    testCases: [''],
    acceptanceCriteria: [''],
    dependencies: [''],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 機能データの保存処理
    onClose();
  };

  const addItem = (field: 'testCases' | 'acceptanceCriteria' | 'dependencies') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const updateItem = (field: 'testCases' | 'acceptanceCriteria' | 'dependencies', index: number, value: string) => {
    const newItems = [...formData[field]];
    newItems[index] = value;
    setFormData(prev => ({
      ...prev,
      [field]: newItems,
    }));
  };

  const removeItem = (field: 'testCases' | 'acceptanceCriteria' | 'dependencies', index: number) => {
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
          <h2 className="text-lg font-semibold text-gray-900">機能の追加</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              機能名
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
              説明
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                優先度
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="high">高</option>
                <option value="medium">中</option>
                <option value="low">低</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                担当者
              </label>
              <input
                type="text"
                value={formData.assignee}
                onChange={(e) => setFormData(prev => ({ ...prev, assignee: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              テストケース
            </label>
            <div className="space-y-2">
              {formData.testCases.map((testCase, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={testCase}
                    onChange={(e) => updateItem('testCases', index, e.target.value)}
                    placeholder={`テストケース ${index + 1}`}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.testCases.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('testCases', index)}
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
              onClick={() => addItem('testCases')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              テストケースを追加
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              受け入れ基準
            </label>
            <div className="space-y-2">
              {formData.acceptanceCriteria.map((criteria, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={criteria}
                    onChange={(e) => updateItem('acceptanceCriteria', index, e.target.value)}
                    placeholder={`基準 ${index + 1}`}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.acceptanceCriteria.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('acceptanceCriteria', index)}
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
              onClick={() => addItem('acceptanceCriteria')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              基準を追加
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              依存関係
            </label>
            <div className="space-y-2">
              {formData.dependencies.map((dependency, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={dependency}
                    onChange={(e) => updateItem('dependencies', index, e.target.value)}
                    placeholder={`依存機能 ${index + 1}`}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {formData.dependencies.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('dependencies', index)}
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
              onClick={() => addItem('dependencies')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              依存関係を追加
            </button>
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