import React from 'react';
import { FileText, Download, Eye, Clock } from 'lucide-react';

const documents = [
  {
    title: 'プロジェクトA 要件定義書',
    category: '要件定義',
    lastModified: '2024/03/20',
    author: '山田太郎',
    size: '2.4 MB',
  },
  {
    title: 'カスタマーインタビュー記録',
    category: 'インタビュー',
    lastModified: '2024/03/19',
    author: '鈴木一郎',
    size: '1.8 MB',
  },
  {
    title: 'PMF評価レポート',
    category: 'レポート',
    lastModified: '2024/03/18',
    author: '田中花子',
    size: '3.2 MB',
  },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">ドキュメント管理</h2>
          <p className="text-sm text-gray-500">プロジェクト関連の文書一覧</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          + 新規作成
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-50 px-6 py-3">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-2 text-sm font-medium text-gray-500">
                ドキュメント名
              </div>
              <div className="text-sm font-medium text-gray-500">カテゴリ</div>
              <div className="text-sm font-medium text-gray-500">最終更新</div>
              <div className="text-sm font-medium text-gray-500">作成者</div>
              <div className="text-sm font-medium text-gray-500">アクション</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200 bg-white">
            {documents.map((doc, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50">
                <div className="grid grid-cols-6 gap-4 items-center">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {doc.title}
                        </div>
                        <div className="text-sm text-gray-500">{doc.size}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {doc.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {doc.lastModified}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{doc.author}</div>
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-gray-500">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}