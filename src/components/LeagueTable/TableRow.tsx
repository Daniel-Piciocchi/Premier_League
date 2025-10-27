// src/components/LeagueTable/TableRow.tsx

import { type LeagueTableRow, TeamStatus } from '../../data/types'
import Last5Badge from './Last5Badge'

interface TableRowProps {
    team: LeagueTableRow
    onClubClick?: (slug: string) => void
}

const TableRow: React.FC<TableRowProps> = ({ team, onClubClick }) => {
    const getRowBgClasses = () => {
        switch (team.status) {
            case TeamStatus.TOP:
                return 'bg-blue-50 hover:bg-blue-100'
            case TeamStatus.RELEGATION:
                return 'bg-red-50 hover:bg-red-100'
            default:
                return 'bg-white hover:bg-gray-50'
        }
    }

    const rowBg = getRowBgClasses()

    const handleClubClick = () => {
        if (team.clubSlug && onClubClick) onClubClick(team.clubSlug)
    }

    return (
        <div className={`flex  last: min-w-max transition-colors ${rowBg}`}>
            <div className="sticky left-0 z-20 bg-inherit px-3 md:px-4 py-3 font-semibold text-center  w-[80px] flex-shrink-0 text-xs md:text-sm">
                {team.position}
            </div>

            <div className="sticky left-[80px] z-10 bg-inherit px-3 md:px-4 py-3 w-[140px] flex-shrink-0 text-xs md:text-sm flex items-center">
                <button
                    onClick={handleClubClick}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium w-full flex items-center justify-start gap-2 transition-colors"
                    title={team.club}
                >
                    {team.clubLogo && (
                        <img
                            src={team.clubLogo}
                            alt={`${team.club} logo`}
                            className="w-5 h-5 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none'
                            }}
                        />
                    )}
                    <span className="whitespace-nowrap leading-none">
                        {team.club}
                    </span>
                </button>
            </div>

            <div className="bg-inherit px-3 py-3 text-center w-[120px] flex-shrink-0 text-xs md:text-sm">
                {team.matchesPlayed}
            </div>
            <div className="bg-inherit px-3 py-3 text-center w-[70px] flex-shrink-0 text-xs md:text-sm">
                {team.wins}
            </div>
            <div className="bg-inherit px-3 py-3 text-center w-[70px] flex-shrink-0 text-xs md:text-sm">
                {team.draws}
            </div>
            <div className="bg-inherit px-3 py-3 text-center w-[70px] flex-shrink-0 text-xs md:text-sm">
                {team.losses}
            </div>
            <div className="bg-inherit px-3 py-3 text-center w-[110px] flex-shrink-0 text-xs md:text-sm">
                {team.goalsScored}
            </div>
            <div className="bg-inherit px-3 py-3 text-center w-[110px] flex-shrink-0 text-xs md:text-sm">
                {team.goalsAgainst}
            </div>
            <div className="bg-inherit px-3 py-3 text-center w-[120px] flex-shrink-0 text-xs md:text-sm">
                {team.goalDifference > 0
                    ? `+${team.goalDifference}`
                    : team.goalDifference}
            </div>
            <div className="bg-inherit px-3 py-3 text-center font-bold  w-[80px] flex-shrink-0 text-xs md:text-sm">
                {team.points}
            </div>
            <div className="bg-inherit px-3 py-3 w-[180px] flex-shrink-0">
                <Last5Badge results={team.last5} />
            </div>
        </div>
    )
}

export default TableRow
