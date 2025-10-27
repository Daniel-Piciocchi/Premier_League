import { type MatchResult } from '../../data/types'

interface Last5BadgeProps {
    results: MatchResult[]
}

const RESULT_CONFIG: Record<MatchResult, { color: string; label: string }> = {
    Win: { color: 'bg-green-600 text-white', label: 'W' },
    Draw: { color: 'bg-gray-400 text-white', label: 'D' },
    Loss: { color: 'bg-red-600 text-white', label: 'L' },
}

const Last5Badge: React.FC<Last5BadgeProps> = ({ results }) => {
    return (
        <div
            className="flex gap-1 justify-center"
            role="list"
            aria-label="Last 5 matches"
        >
            {results.map((result, index) => {
                const config = RESULT_CONFIG[result]
                return (
                    <div
                        key={index}
                        role="listitem"
                        aria-label={result}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${config.color}`}
                        title={result}
                    >
                        {config.label}
                    </div>
                )
            })}
        </div>
    )
}

export default Last5Badge
