import React, { useState } from 'react';
import { X, Plus, Trash } from 'lucide-react';

interface InterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InterviewModal({ isOpen, onClose }: InterviewModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    interviewee: '',
    role: '',
    date: '',
    time: '',
    method: 'online',
    objectives: [''],
    questions: [''],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: インタビューデータの保存処理
    onClose();
  };

  const addItem = (field: 'objectives' | 'questions') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const updateItem = (field: 'objectives' | 'questions', index: number, value: string) => {
    const newItems = [...formData[field]];
    newItems[index] = value;
    setFormData(prev => ({
      ...prev,
      [field]: newItems,
    }));
  };

  const removeItem = (field: 'objectives' | 'questions', index: number) => {
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
          <h2 className="text-lg font-semibold text-gray-900">インタビューの追加</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                企業名
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                インタビュー対象者
              </label>
              <input
                type="text"
                value={formData.interviewee}
                onChange={(e) => setFormData(prev => ({ ...prev, interviewee: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                役職
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                日付
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                時間
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              インタビュー方法
            </label>
            <select
              value={formData.method}
              onChange={(e) => setFormData(prev => ({ ...prev, method: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="online">オンライン</option>
              <option value="offline">対面</option>
              <option value="phone">電話</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              インタビューの目的
            </label>
            <div className="space-y-2">
              {formData.objectives.map((objective, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => updateItem('objectives', index, e.target.value)}
                    placeholder={`目的 ${index + 1}`}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.objectives.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('objectives', index)}
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
              onClick={() => addItem('objectives')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              目的を追加
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              質問事項
            </label>
            <div className="space-y-2">
              {formData.questions.map((question, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => updateItem('questions', index, e.target.value)}
                    placeholder={`質問 ${index + 1}`}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.questions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('questions', index)}
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
              onClick={() => addItem('questions')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              質問を追加
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