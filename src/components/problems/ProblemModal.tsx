import React, { useState } from 'react';
import { X, Plus, Trash } from 'lucide-react';

interface ProblemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProblemModal({ isOpen, onClose }: ProblemModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    impact: 'medium',
    insights: [''],
    interviews: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 課題データの保存処理
    onClose();
  };

  const addInsight = () => {
    setFormData(prev => ({
      ...prev,
      insights: [...prev.insights, ''],
    }));
  };

  const updateInsight = (index: number, value: string) => {
    const newInsights = [...formData.insights];
    newInsights[index] = value;
    setFormData(prev => ({
      ...prev,
      insights: newInsights,
    }));
  };

  const removeInsight = (index: number) => {
    setFormData(prev => ({
      ...prev,
      insights: prev.insights.filter((_, i) => i !== index),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">課題の追加</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              課題タイトル
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
              課題の説明
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
            <label className="block text-sm font-medium text-gray-700">
              影響度
            </label>
            <select
              value={formData.impact}
              onChange={(e) => setFormData(prev => ({ ...prev, impact: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="high">大</option>
              <option value="medium">中</option>
              <option value="low">小</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              インサイト
            </label>
            <div className="space-y-2">
              {formData.insights.map((insight, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={insight}
                    onChange={(e) => updateInsight(index, e.target.value)}
                    placeholder={`インサイト ${index + 1}`}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.insights.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeInsight(index)}
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
              onClick={addInsight}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              インサイトを追加
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