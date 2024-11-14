import React from 'react';
import { UserPlus } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface ProjectTeamProps {
  team: TeamMember[];
}

export default function ProjectTeam({ team }: ProjectTeamProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">プロジェクトチーム</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center">
          <UserPlus className="w-4 h-4 mr-1" />
          メンバーを追加
        </button>
      </div>
      <div className="space-y-4">
        {team.map((member, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={member.image}
              alt={member.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}