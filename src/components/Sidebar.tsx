import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Target,
  Code2,
  BarChart2,
  Rocket,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  UserSquare2,
  BarChart,
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { 
    id: 'dashboard', 
    icon: LayoutDashboard, 
    label: 'ダッシュボード'
  },
  { 
    id: 'cpf', 
    icon: Users, 
    label: 'CPF - 課題検証',
    subItems: [
      { id: 'cpf-interviews', label: 'インタビュー管理' },
      { id: 'cpf-problems', label: '課題管理' },
      { id: 'cpf-persona', label: 'ペルソナ定義' },
      { id: 'cpf-market', label: '市場規模検証' },
    ]
  },
  { 
    id: 'psf', 
    icon: Target, 
    label: 'PSF - 解決策検証',
    subItems: [
      { id: 'psf-solutions', label: '解決策管理' },
      { id: 'psf-prototypes', label: 'プロトタイプ' },
      { id: 'psf-validation', label: '検証結果' },
    ]
  },
  { 
    id: 'spf', 
    icon: Code2, 
    label: 'SPF - 製品開発',
    subItems: [
      { id: 'spf-features', label: '機能管理' },
      { id: 'spf-roadmap', label: 'ロードマップ' },
      { id: 'spf-testing', label: 'テスト管理' },
    ]
  },
  { 
    id: 'pmf', 
    icon: BarChart2, 
    label: 'PMF - 市場適合',
    subItems: [
      { id: 'pmf-metrics', label: '指標管理' },
      { id: 'pmf-feedback', label: 'フィードバック' },
      { id: 'pmf-segments', label: '顧客セグメント' },
    ]
  },
  { 
    id: 'gtm', 
    icon: Rocket, 
    label: 'GTM - 市場展開',
    subItems: [
      { id: 'gtm-strategy', label: '展開戦略' },
      { id: 'gtm-channels', label: 'チャネル管理' },
      { id: 'gtm-metrics', label: '成長指標' },
    ]
  },
];

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['cpf']);

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600">Inovie</h1>
        <p className="text-sm text-gray-500 mt-1">PMFプロセス管理</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => item.subItems ? toggleMenu(item.id) : onNavigate(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 mb-1 rounded-lg transition-colors ${
                currentPage.startsWith(item.id)
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.subItems && (
                expandedMenus.includes(item.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )
              )}
            </button>
            {item.subItems && expandedMenus.includes(item.id) && (
              <div className="ml-4 mb-2">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => onNavigate(subItem.id)}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-sm ${
                      currentPage === subItem.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">山田 太郎</p>
            <p className="text-xs text-gray-500">プロジェクトマネージャー</p>
          </div>
        </div>
      </div>
    </div>
  );
}