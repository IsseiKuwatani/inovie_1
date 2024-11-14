import React, { useState } from 'react';
import { DollarSign, Users, Target, BarChart2, Plus } from 'lucide-react';
import MarketSizeModal from '../../components/cpf/MarketSizeModal';

const marketData = {
  tam: {
    size: '2000億円',
    description: '日本国内の営業支援システム市場全体',
    assumptions: [
      '大手企業（1000人以上）: 3,500社',
      '中堅企業（100-999人）: 52,000社',
      '中小企業（100人未満）: 358,000社',
      '平均導入コスト: 年間48万円/社',
    ],
    sources: [
      '経済産業省 企業活動基本調査',
      'IDC Japan市場調査レポート',
      '業界団体統計データ',
    ],
  },
  sam: {
    size: '800億円',
    description: 'デジタル化に積極的な企業における営業DX市場',
    assumptions: [
      'デジタル化積極企業: 全体の40%',
      '営業部門保有企業: 85%',
      'IT投資予算保有企業: 60%',
    ],
    sources: [
      'デジタル庁 デジタル化実態調査',
      '自社市場調査結果',
    ],
  },
  som: {
    size: '200億円',
    description: '5年以内の現実的な獲得市場規模',
    assumptions: [
      '商談管理システム導入企業',
      'AI・音声認識技術への投資意欲あり',
      '営業部門20名以上の組織',
    ],
    sources: [
      'カスタマーインタビュー結果',
      '競合分析データ',
    ],
  },
};

const competitors = [
  {
    name: 'Company A',
    marketShare: 25,
    strengths: ['ブランド力', '豊富な導入実績', '充実したサポート体制'],
    weaknesses: ['高価格', 'カスタマイズ性の低さ', '機能の複雑さ'],
  },
  {
    name: 'Company B',
    marketShare: 18,
    strengths: ['使いやすいUI', 'リーズナブルな価格', 'API連携の豊富さ'],
    weaknesses: ['機能の不足', '大規模展開の実績不足', 'サポート体制'],
  },
  {
    name: 'Company C',
    marketShare: 15,
    strengths: ['AI技術の強み', 'データ分析機能', 'カスタマイズ性'],
    weaknesses: ['高価格', '導入の複雑さ', '業界特化機能の不足'],
  },
];

export default function MarketPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMarketType, setSelectedMarketType] = useState<'tam' | 'sam' | 'som' | null>(null);

  const handleEditMarket = (type: 'tam' | 'sam' | 'som') => {
    setSelectedMarketType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">市場規模検証</h2>
          <p className="text-sm text-gray-500">
            TAM・SAM・SOMの分析と市場機会の評価
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedMarketType(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          市場分析を追加
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {(['tam', 'sam', 'som'] as const).map((type) => {
          const data = marketData[type];
          const Icon = type === 'tam' ? Target : type === 'sam' ? Users : BarChart2;
          
          return (
            <div key={type} className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <Icon className="w-5 h-5 text-indigo-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-900">
                      {type.toUpperCase()}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleEditMarket(type)}
                    className="text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    編集
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-bold text-gray-900">{data.size}</p>
                  <p className="text-sm text-gray-500">{data.description}</p>
                </div>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      主な前提条件
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      {data.assumptions.map((assumption, index) => (
                        <li key={index}>{assumption}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      データソース
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      {data.sources.map((source, index) => (
                        <li key={index}>{source}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">競合分析</h3>
        <div className="space-y-6">
          {competitors.map((competitor) => (
            <div
              key={competitor.name}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{competitor.name}</h4>
                  <p className="text-sm text-gray-500">
                    市場シェア: {competitor.marketShare}%
                  </p>
                </div>
                <div className="w-24 h-24">
                  <div className="relative w-full h-full">
                    <div
                      className="absolute inset-0 rounded-full border-4 border-indigo-200"
                      style={{
                        clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full border-4 border-indigo-600"
                      style={{
                        clipPath: `polygon(0 0, ${competitor.marketShare}% 0, ${competitor.marketShare}% 100%, 0 100%)`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">強み</h5>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    {competitor.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">弱み</h5>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    {competitor.weaknesses.map((weakness, index) => (
                      <li key={index}>{weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MarketSizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        marketType={selectedMarketType}
        marketData={selectedMarketType ? marketData[selectedMarketType] : null}
      />
    </div>
  );
}