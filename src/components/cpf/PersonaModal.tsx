import React, { useState, useEffect } from 'react';
import { X, Plus, Trash } from 'lucide-react';

interface PersonaModalProps {
  isOpen: boolean;
  onClose: () => void;
  persona?: any;
}

export default function PersonaModal({ isOpen, onClose, persona }: PersonaModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: {
      size: '',
      industry: '',
      department: '',
    },
    attributes: {
      age: '',
      experience: '',
      role: '',
      teamSize: '',
    },
    challenges: [''],
    goals: [''],
    behaviors: [''],
    painPoints: [''],
  });

  useEffect(() => {
    if (persona) {
      setFormData(persona);
    }
  }, [persona]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ペルソナデータの保存処理
    onClose();
  };

  const addItem = (field: 'challenges' | 'goals' | 'behaviors' | 'painPoints') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const updateItem = (
    field: 'challenges' | 'goals' | 'behaviors' | 'painPoints',
    index: number,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item: string, i: number) =>
        i === index ? value : item
      ),
    }));
  };

  const removeItem = (
    field: 'challenges' | 'goals' | 'behaviors' | 'painPoints',
    index: number
  ) => {
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
            {persona ? 'ペルソナの編集' : 'ペルソナの追加'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ペルソナ名
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

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                企業規模
              </label>
              <input
                type="text"
                value={formData.company.size}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    company: { ...prev.company, size: e.target.value },
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                業界
              </label>
              <input
                type="text"
                value={formData.company.industry}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    company: { ...prev.company, industry: e.target.value },
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                部署
              </label>
              <input
                type="text"
                value={formData.company.department}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    company: { ...prev.company, department: e.target.value },
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {Object.entries(formData.attributes).map(([key, value]) => (
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
                      attributes: {
                        ...prev.attributes,
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

          {(['challenges', 'goals', 'behaviors', 'painPoints'] as const).map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field === 'challenges'
                  ? '課題'
                  : field === 'goals'
                  ? '目標'
                  : field === 'behaviors'
                  ? '行動特性'
                  : '課題点'}
              </label>
              <div className="space-y-2">
                {formData[field].map((item: string, index: number) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateItem(field, index, e.target.value)}
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                    {formData[field].length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem(field, index)}
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
                onClick={() => addItem(field)}
                className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                追加
              </button>
            </div>
          ))}

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