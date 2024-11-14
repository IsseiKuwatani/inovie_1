import React, { useState } from 'react';
import { X, Plus, Trash, HelpCircle } from 'lucide-react';

interface PrototypeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MVP_TYPES = {
  concierge: {
    name: 'Concierge MVP',
    description: '手動で製品の機能を代替し、実際のサービス体験を提供',
    examples: ['カスタマーサポート', 'データ入力代行', '分析レポート作成'],
  },
  wizard_of_oz: {
    name: 'Wizard of Oz MVP',
    description: 'バックエンドを人力で処理し、自動化されているように見せる',
    examples: ['AI機能の手動処理', 'レコメンデーション', 'データ分析'],
  },
  landing_page: {
    name: 'Landing Page MVP',
    description: '製品の価値提案を検証し、初期ユーザーの関心を測定',
    examples: ['製品説明ページ', '事前登録フォーム', '機能紹介'],
  },
  single_feature: {
    name: 'Single Feature MVP',
    description: '最も重要な1つの機能に焦点を当てた実装',
    examples: ['基本機能の実装', '主要ワークフロー', 'コア機能'],
  },
  piecemeal: {
    name: 'Piecemeal MVP',
    description: '既存のツールを組み合わせて製品の機能を実現',
    examples: ['ツール連携', 'ノーコード開発', 'API統合'],
  },
};

export default function PrototypeModal({ isOpen, onClose }: PrototypeModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mvpType: 'single_feature',
    type: 'functional',
    url: '',
    features: [''],
    testObjectives: [''],
    testMethods: [''],
    successCriteria: [''],
    metrics: [''],
    timeline: {
      start: '',
      end: '',
      milestones: [''],
    },
    resources: {
      team: [''],
      tools: [''],
      budget: '',
    },
  });

  const [showMvpInfo, setShowMvpInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: プロトタイプデータの保存処理
    onClose();
  };

  const addItem = (field: string, subfield?: string) => {
    if (subfield) {
      setFormData(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [subfield]: [...prev[field][subfield], ''],
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: [...prev[field], ''],
      }));
    }
  };

  const updateItem = (field: string, index: number, value: string, subfield?: string) => {
    if (subfield) {
      const newItems = [...formData[field][subfield]];
      newItems[index] = value;
      setFormData(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [subfield]: newItems,
        },
      }));
    } else {
      const newItems = [...formData[field]];
      newItems[index] = value;
      setFormData(prev => ({
        ...prev,
        [field]: newItems,
      }));
    }
  };

  const removeItem = (field: string, index: number, subfield?: string) => {
    if (subfield) {
      setFormData(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [subfield]: prev[field][subfield].filter((_: string, i: number) => i !== index),
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_: string, i: number) => i !== index),
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">プロトタイプの追加</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                プロトタイプ名
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
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700">
                  MVPタイプ
                </label>
                <button
                  type="button"
                  onClick={() => setShowMvpInfo(!showMvpInfo)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <select
                value={formData.mvpType}
                onChange={(e) => setFormData(prev => ({ ...prev, mvpType: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {Object.entries(MVP_TYPES).map(([key, value]) => (
                  <option key={key} value={key}>{value.name}</option>
                ))}
              </select>
            </div>
          </div>

          {showMvpInfo && (
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                {MVP_TYPES[formData.mvpType].name}について
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {MVP_TYPES[formData.mvpType].description}
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-medium">実装例：</span>
                {MVP_TYPES[formData.mvpType].examples.join('、')}
              </div>
            </div>
          )}

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
                検証タイプ
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="functional">機能検証</option>
                <option value="design">デザイン検証</option>
                <option value="market">市場検証</option>
                <option value="usability">ユーザビリティ検証</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                URL/アクセス方法
              </label>
              <input
                type="text"
                value={formData.url}
                onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                placeholder="プロトタイプのURLまたはアクセス方法"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              実装する機能
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
              成功基準
            </label>
            <div className="space-y-2">
              {formData.successCriteria.map((criteria, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={criteria}
                    onChange={(e) => updateItem('successCriteria', index, e.target.value)}
                    placeholder="例: ユーザー完了率80%以上"
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.successCriteria.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('successCriteria', index)}
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
              onClick={() => addItem('successCriteria')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              基準を追加
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              測定指標
            </label>
            <div className="space-y-2">
              {formData.metrics.map((metric, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={metric}
                    onChange={(e) => updateItem('metrics', index, e.target.value)}
                    placeholder="例: タスク完了時間、エラー率"
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.metrics.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('metrics', index)}
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
              onClick={() => addItem('metrics')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              指標を追加
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                開始予定日
              </label>
              <input
                type="date"
                value={formData.timeline.start}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  timeline: { ...prev.timeline, start: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                完了予定日
              </label>
              <input
                type="date"
                value={formData.timeline.end}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  timeline: { ...prev.timeline, end: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              マイルストーン
            </label>
            <div className="space-y-2">
              {formData.timeline.milestones.map((milestone, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={milestone}
                    onChange={(e) => updateItem('timeline', index, e.target.value, 'milestones')}
                    placeholder="例: 基本機能の実装完了"
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {formData.timeline.milestones.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('timeline', index, 'milestones')}
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
              onClick={() => addItem('timeline', 'milestones')}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              マイルストーンを追加
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                必要なチームメンバー
              </label>
              <div className="space-y-2">
                {formData.resources.team.map((member, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={member}
                      onChange={(e) => updateItem('resources', index, e.target.value, 'team')}
                      placeholder="役割: 担当者名"
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                    {formData.resources.team.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem('resources', index, 'team')}
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
                onClick={() => addItem('resources', 'team')}
                className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                メンバーを追加
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                必要なツール・リソース
              </label>
              <div className="space-y-2">
                {formData.resources.tools.map((tool, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={tool}
                      onChange={(e) => updateItem('resources', index, e.target.value, 'tools')}
                      placeholder="ツール名・用途"
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                    {formData.resources.tools.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem('resources', index, 'tools')}
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
                onClick={() => addItem('resources', 'tools')}
                className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                ツールを追加
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              予算見積もり
            </label>
            <input
              type="text"
              value={formData.resources.budget}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                resources: { ...prev.resources, budget: e.target.value }
              }))}
              placeholder="例: ¥1,000,000"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
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