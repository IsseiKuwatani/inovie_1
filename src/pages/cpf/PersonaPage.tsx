import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import PersonaModal from '../../components/cpf/PersonaModal';

const personas = [
  {
    id: 1,
    name: '営業部長 田中さん',
    company: {
      size: '大手企業',
      industry: 'IT・通信',
      department: '営業部',
    },
    attributes: {
      age: '45-50歳',
      experience: '20年以上',
      role: '営業部長',
      teamSize: '30名',
    },
    challenges: [
      '営業チームの生産性向上',
      'データに基づく意思決定',
      '正確な売上予測',
    ],
    goals: [
      '営業プロセスの効率化',
      'チーム全体の成果向上',
      'リアルタイムな進捗管理',
    ],
    behaviors: [
      '朝一で営業会議を実施',
      'モバイルでの業務が多い',
      'データ分析に時間を割きたい',
    ],
    painPoints: [
      '商談記録の入力工数が多い',
      '案件状況の可視化が不十分',
      'レポート作成に時間がかかる',
    ],
    validationScore: 85,
    interviewCount: 12,
  },
  // ... 他のペルソナデータ
];

export default function PersonaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<typeof personas[0] | null>(null);

  const handleEdit = (persona: typeof personas[0]) => {
    setSelectedPersona(persona);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">ペルソナ定義</h2>
          <p className="text-sm text-gray-500">
            インタビューから得られた知見に基づく理想的な顧客像
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedPersona(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          ペルソナを追加
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {persona.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {persona.company.size} / {persona.company.industry}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(persona)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">属性</h4>
                  <dl className="space-y-1">
                    {Object.entries(persona.attributes).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <dt className="inline text-gray-500">{key}: </dt>
                        <dd className="inline text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">行動特性</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    {persona.behaviors.map((behavior, index) => (
                      <li key={index}>{behavior}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">課題</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    {persona.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">目標</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    {persona.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm text-gray-500">検証スコア</p>
                      <p className="text-lg font-semibold text-indigo-600">
                        {persona.validationScore}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">インタビュー数</p>
                      <p className="text-lg font-semibold text-indigo-600">
                        {persona.interviewCount}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    最終更新: 2024/03/20
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PersonaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        persona={selectedPersona}
      />
    </div>
  );
}