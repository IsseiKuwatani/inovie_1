import React, { useState, useEffect } from 'react';
import { X, Plus, Trash } from 'lucide-react';

interface MarketSizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  marketType: 'tam' | 'sam' | 'som' | null;
  marketData: any;
}

export default function MarketSizeModal({
  isOpen,
  onClose,
  marketType,
  marketData,
}: MarketSizeModalProps) {
  const [formData, setFormData] = useState({
    size: '',
    description: '',
    assumptions: [''],
    sources: [''],
  });

  useEffect(() => {
    if (marketData) {
      setFormData(marketData);
    } else {
      setFormData({
        size: '',
        description: '',
        assumptions: [''],
        sources: [''],
      });
    }
  }, [marketData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 市場規模データの保存処理
    onClose();
  };

  const addItem = (field: 'assumptions' | 'sources') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const updateItem = (field: 'assumptions' | 'sources', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item: string, i: number) =>
        i === index ? value : item
      ),
    }));
  };

  const removeItem = (field: 'assumptions' | 'sources', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_: string, i: number) => i !== index),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {marketType ? `${marketType.toUpperCase()}の編集` : '市場分析の追加'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              市場規模
            </label>
            <input
              type="text"
              value={formData.size}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, size: e.target.value }))
              }
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
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              前提条件
            </label>
            <div className="space-y-2">
              {formData.assumptions.map((assumption, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={assumption}
                    onChange={(e) => updateItem('assumptions', index, e.target.value)}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.assumptions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('assumptions', index)}
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
              onClick={() => addItem('assumptions')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              前提条件を追加
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              データソース
            </label>
            <div className="space-y-2">
              {formData.sources.map((source, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={source}
                    onChange={(e) => updateItem('sources', index, e.target.value)}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.sources.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('sources', index)}
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
              onClick={() => addItem('sources')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              データソースを追加
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