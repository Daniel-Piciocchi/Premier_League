// src/pages/ClubPage.tsx

import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mockLeagueData } from '../data/mockData'

const ClubPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const navigate = useNavigate()

    const club = mockLeagueData.find((team) => team.clubSlug === slug)

    if (!club) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Club Not Found
                    </h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Back to Table
                    </button>
                </div>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-4 md:p-8"
        >
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
                    onClick={() => navigate('/')}
                    className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:-translate-x-1"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span className="font-medium">
                        Back to League Standings
                    </span>
                </motion.button>

                {/* Club Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 mb-4" // ↓ reduced padding and margin
                >
                    <div className="flex items-center gap-6">
                        {club.clubLogo && (
                            <motion.img
                                src={club.clubLogo}
                                alt={`${club.club} logo`}
                                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 80,
                                    damping: 15,
                                    delay: 0.3,
                                }}
                            />
                        )}

                        <div className="flex flex-col">
                            <motion.h1
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeOut',
                                    delay: 0.4,
                                }}
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-1"
                            >
                                {club.club}
                            </motion.h1>

                            {/* Accent Line */}
                            <div
                                className={`h-[3px] w-16 mb-2 ${
                                    club.club === 'Liverpool'
                                        ? 'bg-red-600'
                                        : club.club === 'Arsenal'
                                        ? 'bg-red-500'
                                        : club.club === 'Man City'
                                        ? 'bg-blue-500'
                                        : club.club === 'Chelsea'
                                        ? 'bg-blue-700'
                                        : club.club === 'Newcastle'
                                        ? 'bg-gray-800'
                                        : club.club === 'Fulham'
                                        ? 'bg-black'
                                        : club.club === 'Aston Villa'
                                        ? 'bg-purple-700'
                                        : club.club === 'Brighton'
                                        ? 'bg-cyan-500'
                                        : club.club === 'Brentford'
                                        ? 'bg-red-600'
                                        : club.club === 'Tottenham'
                                        ? 'bg-slate-500'
                                        : club.club === 'Crystal Palace'
                                        ? 'bg-red-700'
                                        : club.club === 'Everton'
                                        ? 'bg-blue-800'
                                        : club.club === 'Man United'
                                        ? 'bg-red-700'
                                        : club.club === 'West Ham'
                                        ? 'bg-pink-700'
                                        : club.club === 'Wolves'
                                        ? 'bg-yellow-500'
                                        : club.club === 'Leicester City'
                                        ? 'bg-blue-600'
                                        : club.club === 'Ipswich Town'
                                        ? 'bg-blue-600'
                                        : club.club === 'Southampton'
                                        ? 'bg-red-700'
                                        : 'bg-gray-300'
                                }`}
                            ></div>

                            <motion.p
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeOut',
                                    delay: 0.5,
                                }}
                                className="text-lg text-gray-600"
                            >
                                Position:{' '}
                                <span className="font-bold text-blue-600">
                                    #{club.position}
                                </span>
                            </motion.p>
                        </div>
                    </div>
                </motion.div>

                {/* Consolidated Stats Card */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Season Statistics
                    </h2>

                    <div className="space-y-4">
                        {/* Key Stats - Highlighted */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b-2 border-gray-200">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">
                                    {club.points}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Points
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-green-600">
                                    {club.wins}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Wins
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-600">
                                    {club.draws}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Draws
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-red-600">
                                    {club.losses}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Losses
                                </p>
                            </div>
                        </div>

                        {/* Detailed Stats */}
                        <div className="space-y-3 pt-2">
                            <div className="flex justify-between items-center py-2">
                                <span className="text-gray-600">
                                    Matches Played
                                </span>
                                <span className="font-semibold text-lg">
                                    {club.matchesPlayed}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-t border-gray-100">
                                <span className="text-gray-600">
                                    Goals Scored
                                </span>
                                <span className="font-semibold text-lg text-green-600">
                                    {club.goalsScored}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-t border-gray-100">
                                <span className="text-gray-600">
                                    Goals Conceded
                                </span>
                                <span className="font-semibold text-lg text-red-600">
                                    {club.goalsAgainst}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-t border-gray-100">
                                <span className="text-gray-600">
                                    Goal Difference
                                </span>
                                <span
                                    className={`font-semibold text-lg ${
                                        club.goalDifference > 0
                                            ? 'text-green-600'
                                            : club.goalDifference < 0
                                            ? 'text-red-600'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    {club.goalDifference > 0
                                        ? `+${club.goalDifference}`
                                        : club.goalDifference}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ClubPage
