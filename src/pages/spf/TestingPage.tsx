import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react';

const testResults = [
  {
    feature: '音声入力機能',
    summary: {
      total: 24,
      passed: 20,
      failed: 2,
      pending: 2,
    },
    cases: [
      {
        name: '音声認識の精度テスト',
        status: 'passed',
        duration: '2.5s',
        assertions: [
          '95%以上の認識精度',
          'ノイズ環境での動作確認',
        ],
      },
      {
        name: 'リアルタイム変換処理',
        status: 'failed',
        duration: '1.8s',
        error: 'タイムアウトが発生（5秒以上）',
      },
      {
        name: '多言語対応テスト',
        status: 'pending',
        assertions: [
          '日本語認識テスト',
          '英語認識テスト',
        ],
      },
    ],
  },
  {
    feature: 'テキスト編集機能',
    summary: {
      total: 18,
      passed: 15,
      failed: 1,
      pending: 2,
    },
    cases: [
      {
        name: '基本的な編集操作',
        status: 'passed',
        duration: '1.2s',
        assertions: [
          'テキストの追加・削除',
          'コピー&ペースト機能',
        ],
      },
      {
        name: 'undo/redo機能',
        status: 'passed',
        duration: '0.8s',
        assertions: [
          '操作の取り消し',
          '操作のやり直し',
        ],
      },
      {
        name: '自動保存機能',
        status: 'failed',
        duration: '2.1s',
        error: 'データの永続化に失敗',
      },
    ],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'passed':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'failed':
      return <XCircle className="w-5 h-5 text-red-500" />;
    case 'pending':
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    default:
      return null;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'passed':
      return 'bg-green-100 text-green-800';
    case 'failed':
      return 'bg-red-100 text-red-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function TestingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">テスト管理</h2>
        <p className="text-sm text-gray-500">
          機能テストの実行と結果の管理
        </p>
      </div>

      <div className="space-y-6">
        {testResults.map((result, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {result.feature}
                </h3>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {result.summary.passed}
                    </div>
                    <div className="text-sm text-gray-500">成功</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      {result.summary.failed}
                    </div>
                    <div className="text-sm text-gray-500">失敗</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">
                      {result.summary.pending}
                    </div>
                    <div className="text-sm text-gray-500">保留</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {result.cases.map((testCase, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {getStatusIcon(testCase.status)}
                        <span className="ml-2 font-medium text-gray-900">
                          {testCase.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {testCase.duration && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {testCase.duration}
                          </div>
                        )}
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            testCase.status
                          )}`}
                        >
                          {testCase.status === 'passed'
                            ? '成功'
                            : testCase.status === 'failed'
                            ? '失敗'
                            : '保留'}
                        </span>
                      </div>
                    </div>

                    {testCase.assertions && (
                      <div className="mt-2">
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          検証項目
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {testCase.assertions.map((assertion, j) => (
                            <li key={j}>{assertion}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {testCase.error && (
                      <div className="mt-2 p-2 bg-red-50 rounded text-sm text-red-700">
                        <span className="font-medium">エラー: </span>
                        {testCase.error}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    合計テスト数: {result.summary.total}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{
                          width: `${(result.summary.passed / result.summary.total) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {Math.round((result.summary.passed / result.summary.total) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}