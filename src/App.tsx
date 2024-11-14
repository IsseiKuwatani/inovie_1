import React, { useState } from 'react';
import DashboardPage from './pages/DashboardPage';
import InterviewsPage from './pages/cpf/InterviewsPage';
import ProblemsPage from './pages/cpf/ProblemsPage';
import PersonaPage from './pages/cpf/PersonaPage';
import MarketPage from './pages/cpf/MarketPage';
import SolutionsPage from './pages/psf/SolutionsPage';
import PrototypesPage from './pages/psf/PrototypesPage';
import ValidationPage from './pages/psf/ValidationPage';
import FeaturesPage from './pages/spf/FeaturesPage';
import RoadmapPage from './pages/spf/RoadmapPage';
import TestingPage from './pages/spf/TestingPage';
import MetricsPage from './pages/pmf/MetricsPage';
import FeedbackPage from './pages/pmf/FeedbackPage';
import SegmentsPage from './pages/pmf/SegmentsPage';
import StrategyPage from './pages/gtm/StrategyPage';
import ChannelsPage from './pages/gtm/ChannelsPage';
import GrowthMetricsPage from './pages/gtm/GrowthMetricsPage';
import Layout from './components/Layout';

type Page = 
  | 'dashboard' 
  | 'cpf-interviews' | 'cpf-problems' | 'cpf-persona' | 'cpf-market'
  | 'psf-solutions' | 'psf-prototypes' | 'psf-validation'
  | 'spf-features' | 'spf-roadmap' | 'spf-testing'
  | 'pmf-metrics' | 'pmf-feedback' | 'pmf-segments'
  | 'gtm-strategy' | 'gtm-channels' | 'gtm-metrics';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const getPageTitle = (page: Page) => {
    const titles: Record<Page, string> = {
      'dashboard': 'ダッシュボード',
      'cpf-interviews': 'インタビュー管理',
      'cpf-problems': '課題管理',
      'cpf-persona': 'ペルソナ定義',
      'cpf-market': '市場規模検証',
      'psf-solutions': '解決策管理',
      'psf-prototypes': 'プロトタイプ管理',
      'psf-validation': '検証結果',
      'spf-features': '機能管理',
      'spf-roadmap': 'ロードマップ',
      'spf-testing': 'テスト管理',
      'pmf-metrics': '指標管理',
      'pmf-feedback': 'フィードバック管理',
      'pmf-segments': '顧客セグメント',
      'gtm-strategy': '展開戦略',
      'gtm-channels': 'チャネル管理',
      'gtm-metrics': '成長指標',
    };
    return titles[page];
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'cpf-interviews':
        return <InterviewsPage />;
      case 'cpf-problems':
        return <ProblemsPage />;
      case 'cpf-persona':
        return <PersonaPage />;
      case 'cpf-market':
        return <MarketPage />;
      case 'psf-solutions':
        return <SolutionsPage />;
      case 'psf-prototypes':
        return <PrototypesPage />;
      case 'psf-validation':
        return <ValidationPage />;
      case 'spf-features':
        return <FeaturesPage />;
      case 'spf-roadmap':
        return <RoadmapPage />;
      case 'spf-testing':
        return <TestingPage />;
      case 'pmf-metrics':
        return <MetricsPage />;
      case 'pmf-feedback':
        return <FeedbackPage />;
      case 'pmf-segments':
        return <SegmentsPage />;
      case 'gtm-strategy':
        return <StrategyPage />;
      case 'gtm-channels':
        return <ChannelsPage />;
      case 'gtm-metrics':
        return <GrowthMetricsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <Layout
      currentPage={currentPage}
      onNavigate={setCurrentPage}
      title={getPageTitle(currentPage)}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;