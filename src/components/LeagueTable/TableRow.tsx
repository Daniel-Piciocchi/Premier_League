// src/components/LeagueTable/TableRow.tsx

import { motion } from 'framer-motion'
import { type LeagueTableRow, TeamStatus } from '../../data/types'
import Last5Badge from './Last5Badge'

interface TableRowProps {
    team: LeagueTableRow
    onClubClick?: (slug: string) => void
}

const TableRow: React.FC<TableRowProps> = ({ team, onClubClick }) => {
    const getRowBackgroundColor = (): string => {
        switch (team.status) {
            case TeamStatus.TOP:
                return 'bg-blue-50 hover:bg-blue-100'
            case TeamStatus.RELEGATION:
                return 'bg-red-50 hover:bg-red-100'
            default:
                return 'bg-white hover:bg-gray-50'
        }
    }

    const handleClubClick = () => {
        if (team.clubSlug && onClubClick) {
            onClubClick(team.clubSlug)
        }
    }

    return (
        <motion.div
            whileHover={{
                y: -2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: { duration: 0.2 },
            }}
            className={`flex border-b border-gray-200 transition-colors min-w-max ${getRowBackgroundColor()}`}
        >
            {/* Position - Sticky */}
            <div className="sticky left-0 z-10 bg-inherit px-3 md:px-4 py-3 font-semibold text-center border-r border-gray-200 w-[86px] flex-shrink-0 text-xs md:text-sm">
                {team.position}
            </div>

            {/* Club - Sticky - WITH LOGO - ALIGNED */}
            <div className="sticky left-[86px] z-10 bg-inherit px-3 md:px-4 py-3 border-r-2 border-gray-300 w-[120px] md:w-[180px] flex-shrink-0 text-xs md:text-sm flex items-center">
                <button
                    onClick={handleClubClick}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium w-full flex items-center justify-center gap-2 transition-all"
                    title={team.club}
                >
                    {/* Club Logo */}
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
                    <span className="truncate leading-none">{team.club}</span>
                </button>
            </div>

            {/* Rest of columns remain the same */}
            <div className="px-3 py-3 text-center border-r border-gray-200 w-[140px] flex-shrink-0 text-xs md:text-sm">
                {team.matchesPlayed}
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-200 w-[90px] flex-shrink-0 text-xs md:text-sm">
                {team.wins}
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-200 w-[90px] flex-shrink-0 text-xs md:text-sm">
                {team.draws}
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-200 w-[90px] flex-shrink-0 text-xs md:text-sm">
                {team.losses}
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-200 w-[120px] flex-shrink-0 text-xs md:text-sm">
                {team.goalsScored}
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-200 w-[120px] flex-shrink-0 text-xs md:text-sm">
                {team.goalsAgainst}
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-200 w-[140px] flex-shrink-0 text-xs md:text-sm">
                {team.goalDifference > 0
                    ? `+${team.goalDifference}`
                    : team.goalDifference}
            </div>
            <div className="px-3 py-3 text-center font-bold border-r border-gray-200 w-[100px] flex-shrink-0 text-xs md:text-sm">
                {team.points}
            </div>
            <div className="px-3 py-3 w-[200px] flex-shrink-0">
                <Last5Badge results={team.last5} />
            </div>
        </motion.div>
    )
}

export default TableRow
