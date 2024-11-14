import React, { useState } from 'react';
import { Users, ThumbsUp, ThumbsDown, MessageSquare, ExternalLink } from 'lucide-react';

const prototypes = [
  {
    id: 1,
    title: '音声入力MVP',
    description: '基本的な音声認識とテキスト化機能を実装したプロトタイプ',
    status: 'completed',
    type: 'functional',
    url: 'https://prototype.example.com/voice-input',
    completion: 100,
    testers: 8,
    positiveResponses: 6,
    negativeResponses: 2,
    features: [
      '音声認識機能',
      'テキスト変換',
      '基本的な編集機能',
    ],
    feedback: [
      '認識精度が高い',
      'UIがシンプルで使いやすい',
      'ショートカットキーがあると便利',
    ],
  },
  {
    id: 2,
    title: 'インサイト分析UI',
    description: 'データ可視化とレポート機能のモックアップ',
    status: 'in_progress',
    type: 'design',
    url: 'https://figma.com/prototype/insight-analysis',
    completion: 75,
    testers: 5,
    positiveResponses: 4,
    negativeResponses: 1,
    features: [
      'ダッシュボードレイアウト',
      'チャート表示',
      'フィルター機能',
    ],
    feedback: [
      'データの見える化が分かりやすい',
      'フィルターの位置を調整してほしい',
    ],
  },
];

export default function PrototypeList() {
  const [expandedPrototype, setExpandedPrototype] = useState<number | null>(null);

  const toggleExpand = (prototypeId: number) => {
    setExpandedPrototype(expandedPrototype === prototypeId ? null : prototypeId);
  };

  return (
    <div className="space-y-4">
      {prototypes.map((prototype) => (
        <div
          key={prototype.id}
          className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{prototype.title}</h3>
              <p className="text-sm text-gray-500">{prototype.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  prototype.type === 'functional'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {prototype.type === 'functional' ? '機能検証' : 'デザイン検証'}
              </span>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  prototype.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {prototype.status === 'completed' ? '完了' : '進行中'}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 mt-3">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {prototype.testers}人が検証
            </div>
            <div className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1 text-green-500" />
              {prototype.positiveResponses}
            </div>
            <div className="flex items-center">
              <ThumbsDown className="w-4 h-4 mr-1 text-red-500" />
              {prototype.negativeResponses}
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              {prototype.feedback.length}件のフィードバック
            </div>
            <a
              href={prototype.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              プロトタイプを見る
            </a>
          </div>

          <div className="mt-3">
            <div className="flex justify-between items-center text-sm mb-1">
              <span className="text-gray-500">完了度</span>
              <span className="font-medium text-gray-900">{prototype.completion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${prototype.completion}%` }}
              />
            </div>
          </div>

          <div className="mt-3">
            <button
              onClick={() => toggleExpand(prototype.id)}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              {expandedPrototype === prototype.id ? '詳細を閉じる' : '詳細を表示'}
            </button>
          </div>

          {expandedPrototype === prototype.id && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  実装機能
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {prototype.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  フィードバック
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {prototype.feedback.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}