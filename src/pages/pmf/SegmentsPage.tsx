import React, { useState } from 'react';
import { Plus, Users, TrendingUp, Clock, DollarSign } from 'lucide-react';
import SegmentModal from '../../components/pmf/SegmentModal';

const segments = [
  {
    id: 1,
    name: '大手企業',
    description: '従業員1000人以上の企業',
    characteristics: {
      size: '1000人以上',
      industry: 'IT・通信、製造業',
      budget: '年間1000万円以上',
      decisionMaker: '情報システム部門長',
    },
    metrics: {
      users: 450,
      growth: '+12%',
      retention: '88%',
      avgUsage: '4.5時間/日',
      satisfaction: 4.3,
      ltv: '¥2,400,000',
    },
    needs: [
      'チーム全体の生産性向上',
      'データに基づく意思決定',
      'セキュリティ要件の充足',
    ],
    painPoints: [
      '既存システムとの統合が複雑',
      '導入・運用コストが高い',
      '社内承認プロセスが長い',
    ],
  },
  {
    id: 2,
    name: '中小企業',
    description: '従業員100-999人の企業',
    characteristics: {
      size: '100-999人',
      industry: '小売、サービス業',
      budget: '年間100-500万円',
      decisionMaker: '経営層・部門長',
    },
    metrics: {
      users: 580,
      growth: '+18%',
      retention: '82%',
      avgUsage: '3.8時間/日',
      satisfaction: 4.1,
      ltv: '¥1,200,000',
    },
    needs: [
      'コスト効率の向上',
      '導入の容易さ',
      'カスタマイズ性',
    ],
    painPoints: [
      '予算の制約',
      'IT人材の不足',
      '業務プロセスの標準化',
    ],
  },
  {
    id: 3,
    name: 'スタートアップ',
    description: '設立5年以内の成長企業',
    characteristics: {
      size: '100人未満',
      industry: 'IT、フィンテック',
      budget: '年間50-100万円',
      decisionMaker: 'CEO・CTO',
    },
    metrics: {
      users: 220,
      growth: '+25%',
      retention: '78%',
      avgUsage: '3.2時間/日',
      satisfaction: 4.0,
      ltv: '¥800,000',
    },
    needs: [
      '急速な拡張性',
      'API連携の充実',
      'モバイル対応',
    ],
    painPoints: [
      'リソースの制約',
      '急速な成長への対応',
      '機能の優先順位付け',
    ],
  },
];

export default function SegmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<typeof segments[0] | null>(null);
  const [expandedSegment, setExpandedSegment] = useState<number | null>(null);

  const handleEdit = (segment: typeof segments[0]) => {
    setSelectedSegment(segment);
    setIsModalOpen(true);
  };

  const toggleExpand = (segmentId: number) => {
    setExpandedSegment(expandedSegment === segmentId ? null : segmentId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">顧客セグメント</h2>
          <p className="text-sm text-gray-500">
            顧客層の分析と最適化戦略の管理
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedSegment(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          セグメントを追加
        </button>
      </div>

      <div className="space-y-4">
        {segments.map((segment) => (
          <div
            key={segment.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {segment.name}
                  </h3>
                  <p className="text-sm text-gray-500">{segment.description}</p>
                </div>
                <button
                  onClick={() => handleEdit(segment)}
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  編集
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-500">ユーザー数</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {segment.metrics.users}
                  </p>
                  <span className="text-sm text-green-600">
                    {segment.metrics.growth}
                  </span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-500">継続率</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {segment.metrics.retention}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-500">平均利用時間</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {segment.metrics.avgUsage}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-500">LTV</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {segment.metrics.ltv}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => toggleExpand(segment.id)}
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  {expandedSegment === segment.id ? '詳細を閉じる' : '詳細を表示'}
                </button>
              </div>

              {expandedSegment === segment.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      セグメント特性
                    </h4>
                    <dl className="space-y-1">
                      {Object.entries(segment.characteristics).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <dt className="inline text-gray-500">{key}: </dt>
                          <dd className="inline text-gray-900">{value}</dd>
                        </div>
                      ))}
                    </dl>

                    <h4 className="text-sm font-medium text-gray-900 mt-4 mb-2">
                      主要ニーズ
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      {segment.needs.map((need, index) => (
                        <li key={index}>{need}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      課題点
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      {segment.painPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        満足度
                      </h4>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`text-${
                                star <= segment.metrics.satisfaction ? 'yellow' : 'gray'
                              }-400`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {segment.metrics.satisfaction}/5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <SegmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        segment={selectedSegment}
      />
    </div>
  );
}