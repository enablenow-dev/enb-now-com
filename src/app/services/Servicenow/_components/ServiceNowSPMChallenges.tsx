import React, { useState } from 'react';
import { Settings, Target, AlertTriangle, Plus, LucideIcon } from 'lucide-react';

// Type definitions
interface Challenge {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ChallengeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
}

// Individual Challenge Card Component
const ChallengeCard: React.FC<ChallengeCardProps> = ({ icon: Icon, title, description, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center min-h-[380px] max-w-[320px] mx-auto relative">
      {/* Icon */}
      <div className="mb-6">
        <Icon className="w-12 h-12 text-[#007BA8]" strokeWidth={1.5} />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight font-outfit">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow font-figtree">
        {description}
      </p>
      
      {/* Expand Button */}
      <button
        onClick={onToggle}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#007BA8] hover:bg-[#006ba8] text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-md"
        aria-label={`Expand ${title}`}
      >
        <Plus className="w-5 h-5" strokeWidth={2} />
      </button>
    </div>
  );
};

// Main Component
const ServiceNowSPMChallenges: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  // Sample data - you can modify this array to add more challenges
  const challenges: Challenge[] = [
    {
      id: 'portfolio',
      icon: Settings,
      title: 'Portfolio Visibility and Alignment',
      description: 'Provides a complete view of projects, portfolios, and business objectives.'
    },
    {
      id: 'resource',
      icon: Target,
      title: 'Resource Optimization',
      description: 'Ensures the best use of available resources across various projects.'
    },
    {
      id: 'risk',
      icon: AlertTriangle,
      title: 'Risk and Issue Management',
      description: 'Proactively identifies and addresses risks to ensure project success.'
    },
    {
        id: 'value',
        icon: AlertTriangle,
        title: 'Value Realization and Measurement',
        description: 'Tracks and measures the value delivered by portfolio execution.'
      }
  ];

  const handleCardToggle = (cardId: string): void => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-outfit">
          Challenges Addressed by ServiceNow SPM
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {challenges.map((challenge, index) => {
          const isLastSingleOnLg = challenges.length % 3 === 1 && index === challenges.length - 1;
          return (
            <div key={challenge.id} className={isLastSingleOnLg ? "lg:col-start-2" : ""}>
              <ChallengeCard
                icon={challenge.icon}
                title={challenge.title}
                description={challenge.description}
                isExpanded={expandedCards[challenge.id]}
                onToggle={() => handleCardToggle(challenge.id)}
              />
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default ServiceNowSPMChallenges;