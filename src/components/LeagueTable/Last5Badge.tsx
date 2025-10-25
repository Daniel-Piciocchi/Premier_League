// src/components/LeagueTable/Last5Badge.tsx

import { type MatchResult } from '../../data/types';

interface Last5BadgeProps {
  results: MatchResult[];
}

const Last5Badge: React.FC<Last5BadgeProps> = ({ results }) => {
  const getResultColor = (result: MatchResult): string => {
    switch (result) {
      case 'Win':
        return 'bg-green-600 text-white';
      case 'Draw':
        return 'bg-gray-400 text-white';
      case 'Loss':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-300 text-gray-700';
    }
  };

  const getResultLabel = (result: MatchResult): string => {
    switch (result) {
      case 'Win':
        return 'W';
      case 'Draw':
        return 'D';
      case 'Loss':
        return 'L';
      default:
        return '?';
    }
  };

  return (
    <div className="flex gap-1 justify-center">
      {results.map((result, index) => (
        <div
          key={index}
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${getResultColor(result)}`}
          title={result}
        >
          {getResultLabel(result)}
        </div>
      ))}
    </div>
  );
};

export default Last5Badge;