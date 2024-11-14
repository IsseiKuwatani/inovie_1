import React from 'react';
import { Users, Target, MessageSquare, CheckCircle2 } from 'lucide-react';

interface CPFPhaseProps {
  data: any;
  projectId: string;
}

export default function CPFPhase({ data, projectId }: CPFPhaseProps) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          カスタマープロブレムフィット (CPF)
        </h2>
        <p className="text-gray-500 mt-1">
          顧客の課題を深く理解し、解決すべき本質的な問題を特定するフェーズ
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">インタビュー数</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.interviews}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">特定した課題</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.problems}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">検証済み課題</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.validatedProblems}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <MessageSquare className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-500">課題検証率</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {Math.round((data.validatedProblems / data.problems) * 100)}%
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">主要な課題</h3>
          <div className="space-y-4">
            {[
              {
                title: '営業活動の非効率性',
                description: '商談記録の入力や顧客情報の管理に多くの時間を要している',
                validation: 92,
              },
              {
                title: '顧客インサイトの不足',
                description: '顧客ニーズの変化や潜在的なニーズを把握できていない',
                validation: 88,
              },
              {
                title: '商談進捗の可視化',
                description: '案件の状況や成約確度の判断が属人的になっている',
                validation: 85,
              },
            ].map((problem, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{problem.title}</h4>
                  <span className="text-sm font-medium text-indigo-600">
                    検証度 {problem.validation}%
                  </span>
                </div>
                <p className="text-sm text-gray-500">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            インタビュー記録
          </h3>
          <div className="space-y-4">
            {[
              {
                company: '株式会社ABC',
                role: '営業部長',
                date: '2024/03/15',
                insights: [
                  '顧客データの一元管理が課題',
                  '営業レポート作成に時間がかかる',
                ],
              },
              {
                company: 'DEF株式会社',
                role: '営業マネージャー',
                date: '2024/03/14',
                insights: [
                  '案件進捗の共有が難しい',
                  '顧客とのコミュニケーション履歴の管理',
                ],
              },
            ].map((interview, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {interview.company}
                    </h4>
                    <p className="text-sm text-gray-500">{interview.role}</p>
                  </div>
                  <span className="text-sm text-gray-500">{interview.date}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {interview.insights.map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}