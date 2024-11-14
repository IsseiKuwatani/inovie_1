import React from 'react';
import CPFPhase from './CPFPhase';
import PSFPhase from './PSFPhase';
import SPFPhase from './SPFPhase';
import PMFPhase from './PMFPhase';

interface PhaseDetailsProps {
  phase: 'cpf' | 'psf' | 'spf' | 'pmf';
  phaseData: any;
  projectId: string;
}

export default function PhaseDetails({ phase, phaseData, projectId }: PhaseDetailsProps) {
  const renderPhaseContent = () => {
    switch (phase) {
      case 'cpf':
        return <CPFPhase data={phaseData} projectId={projectId} />;
      case 'psf':
        return <PSFPhase data={phaseData} projectId={projectId} />;
      case 'spf':
        return <SPFPhase data={phaseData} projectId={projectId} />;
      case 'pmf':
        return <PMFPhase data={phaseData} projectId={projectId} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {renderPhaseContent()}
    </div>
  );
}