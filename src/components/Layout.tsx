import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const phaseDescriptions = {
  dashboard: 'プロジェクト全体の進捗状況と重要指標を確認できます。',
  cpf: 'カスタマープロブレムフィット（CPF）フェーズでは、顧客の課題を深く理解し、本質的な問題を特定します。インタビューや調査を通じて、解決すべき重要な課題を明確にします。',
  psf: 'プロブレムソリューションフィット（PSF）フェーズでは、特定された課題に対する効果的な解決策を考案し、検証します。プロトタイプを作成して、解決策の有効性を確認します。',
  spf: 'ソリューションプロダクトフィット（SPF）フェーズでは、検証された解決策を実際の製品として実装します。ユーザビリティと品質を重視した開発を行います。',
  pmf: 'プロダクトマーケットフィット（PMF）フェーズでは、製品が市場ニーズを満たしているかを検証します。ユーザーフィードバックを収集し、製品の改善を進めます。',
  gtm: 'ゴートゥーマーケット（GTM）フェーズでは、製品の市場展開と成長戦略を実行します。マーケティング施策の展開や、顧客基盤の拡大を図ります。',
};

export default function Layout({ children, title, currentPage, onNavigate }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600 mt-2">
              {phaseDescriptions[currentPage as keyof typeof phaseDescriptions]}
            </p>
            {currentPage !== 'dashboard' && (
              <div className="mt-4 flex items-center">
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
                      style={{
                        width: currentPage === 'cpf' ? '75%' :
                               currentPage === 'psf' ? '60%' :
                               currentPage === 'spf' ? '45%' :
                               currentPage === 'pmf' ? '30%' :
                               currentPage === 'gtm' ? '15%' : '0%'
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>開始</span>
                    <span>進行中</span>
                    <span>完了</span>
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    {currentPage === 'cpf' ? '75%' :
                     currentPage === 'psf' ? '60%' :
                     currentPage === 'spf' ? '45%' :
                     currentPage === 'pmf' ? '30%' :
                     currentPage === 'gtm' ? '15%' : '0%'}
                  </span>
                </div>
              </div>
            )}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}