import React, { useState, useEffect } from 'react';
import { X, Plus, Trash } from 'lucide-react';

interface SegmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  segment?: any;
}

export default function SegmentModal({ isOpen, onClose, segment }: SegmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    characteristics: {
      size: '',
      industry: '',
      budget: '',
      decisionMaker: '',
    },
    metrics: {
      users: 0,
      growth: '',
      retention: '',
      avgUsage: '',
      satisfaction: 0,
      ltv: '',
    },
    needs: [''],
    painPoints: [''],
  });

  useEffect(() => {
    if (segment) {
      setFormData(segment);
    }
  }, [segment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: セグメントデータの保存処理
    onClose();
  };

  const addItem = (field: 'needs' | 'painPoints') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const updateItem = (field: 'needs' | 'painPoints', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item: string, i: number) =>
        i === index ? value : item
      ),
    }));
  };

  const removeItem = (field: 'needs' | 'painPoints', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_: string, i: number) => i !== index),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {segment ? 'セグメントの編集' : 'セグメントの追加'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                セグメント名
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                説明
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, description: e.target.value }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">セグメント特性</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(formData.characteristics).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700">
                    {key}
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        characteristics: {
                          ...prev.characteristics,
                          [key]: e.target.value,
                        },
                      }))
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">メトリクス</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(formData.metrics).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700">
                    {key}
                  </label>
                  <input
                    type={typeof value === 'number' ? 'number' : 'text'}
                    value={value}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        metrics: {
                          ...prev.metrics,
                          [key]: typeof value === 'number' ? Number(e.target.value) : e.target.value,
                        },
                      }))
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">主要ニーズ</h3>
            <div className="space-y-2">
              {formData.needs.map((need, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={need}
                    onChange={(e) => updateItem('needs', index, e.target.value)}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.needs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('needs', index)}
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
              onClick={() => addItem('needs')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              ニーズを追加
            </button>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">課題点</h3>
            <div className="space-y-2">
              {formData.painPoints.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={point}
                    onChange={(e) => updateItem('painPoints', index, e.target.value)}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.painPoints.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('painPoints', index)}
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
              onClick={() => addItem('painPoints')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              課題を追加
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