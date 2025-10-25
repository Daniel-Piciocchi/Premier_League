// src/components/LeagueTable/TableRow.tsx

import { motion } from 'framer-motion'
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
                return 'bg-blue-50 group-hover:bg-blue-100'
            case TeamStatus.RELEGATION:
                return 'bg-red-50 group-hover:bg-red-100'
            default:
                return 'bg-white group-hover:bg-gray-50'
        }
    }

    const bgClasses = getRowBgClasses()

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
            className={`group flex border-b border-gray-200 hover:border-transparent transition-colors min-w-max transform-gpu will-change-transform ${bgClasses}`}
        >
            {/* Position - Sticky */}
            <div
                className={`sticky left-0 z-10 px-3 md:px-4 py-3 font-semibold text-center border-r border-gray-200 w-[86px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.position}
            </div>

            {/* Club - Sticky - WITH LOGO - ALIGNED */}
            <div
                className={`sticky left-[86px] z-10 px-3 md:px-4 py-3 border-r-2 border-gray-300 w-[120px] md:w-[180px] flex-shrink-0 text-xs md:text-sm flex items-center ${bgClasses}`}
            >
                <button
                    onClick={handleClubClick}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium w-full flex items-center justify-center gap-2 transition-all"
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
                    <span className="truncate leading-none">{team.club}</span>
                </button>
            </div>

            {/* Rest of columns - ALL with background classes */}
            <div
                className={`px-3 py-3 text-center border-r border-gray-200 w-[140px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.matchesPlayed}
            </div>
            <div
                className={`px-3 py-3 text-center border-r border-gray-200 w-[90px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.wins}
            </div>
            <div
                className={`px-3 py-3 text-center border-r border-gray-200 w-[90px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.draws}
            </div>
            <div
                className={`px-3 py-3 text-center border-r border-gray-200 w-[90px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.losses}
            </div>
            <div
                className={`px-3 py-3 text-center border-r border-gray-200 w-[120px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.goalsScored}
            </div>
            <div
                className={`px-3 py-3 text-center border-r border-gray-200 w-[120px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.goalsAgainst}
            </div>
            <div
                className={`px-3 py-3 text-center border-r border-gray-200 w-[140px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.goalDifference > 0
                    ? `+${team.goalDifference}`
                    : team.goalDifference}
            </div>
            <div
                className={`px-3 py-3 text-center font-bold border-r border-gray-200 w-[100px] flex-shrink-0 text-xs md:text-sm ${bgClasses}`}
            >
                {team.points}
            </div>
            <div className={`px-3 py-3 w-[200px] flex-shrink-0 ${bgClasses}`}>
                <Last5Badge results={team.last5} />
            </div>
        </motion.div>
    )
}

export default TableRow
