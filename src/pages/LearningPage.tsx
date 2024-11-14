import React from 'react';
import { BookOpen, Play, Clock, Star } from 'lucide-react';

const resources = [
  {
    title: 'PMFプロセスの基礎',
    type: 'コース',
    duration: '2時間',
    level: '初級',
    rating: 4.8,
    reviews: 128,
    progress: 75,
  },
  {
    title: 'カスタマーインタビューの実践手法',
    type: 'ビデオ',
    duration: '45分',
    level: '中級',
    rating: 4.6,
    reviews: 95,
    progress: 30,
  },
  {
    title: 'MVP設計ワークショップ',
    type: 'ワークショップ',
    duration: '3時間',
    level: '上級',
    rating: 4.9,
    reviews: 64,
    progress: 0,
  },
];

export default function LearningPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">学習リソース</h2>
          <p className="text-sm text-gray-500">
            PMFプロセスに関する教材とガイドライン
          </p>
        </div>
        <div className="flex space-x-3">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>全てのレベル</option>
            <option>初級</option>
            <option>中級</option>
            <option>上級</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>全てのタイプ</option>
            <option>コース</option>
            <option>ビデオ</option>
            <option>ワークショップ</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      {resource.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                        ${
                          resource.type === 'コース'
                            ? 'bg-blue-100 text-blue-800'
                            : resource.type === 'ビデオ'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                    >
                      {resource.type}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {resource.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {resource.level}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {resource.rating} ({resource.reviews} レビュー)
                    </div>
                  </div>
                </div>
                <button
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
                    ${
                      resource.progress > 0
                        ? 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'
                        : 'text-white bg-indigo-600 hover:bg-indigo-700'
                    }`}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {resource.progress > 0 ? '続きから' : '開始する'}
                </button>
              </div>
              {resource.progress > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>進捗状況</span>
                    <span>{resource.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 rounded-full bg-indigo-600"
                      style={{ width: `${resource.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}