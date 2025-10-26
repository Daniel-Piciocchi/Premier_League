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

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-lg shadow-md border border-gray-100 p-8 mb-6"
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

                        <div>
                            <motion.h1
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeOut',
                                    delay: 0.4,
                                }}
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                            >
                                {club.club}
                            </motion.h1>

                            <motion.p
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeOut',
                                    delay: 0.5,
                                }}
                                className="text-xl text-gray-600"
                            >
                                Position:{' '}
                                <span className="font-bold text-blue-600">
                                    #{club.position}
                                </span>
                            </motion.p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
                >
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center">
                        <p className="text-3xl font-bold text-blue-600">
                            {club.points}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Points</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center">
                        <p className="text-3xl font-bold text-green-600">
                            {club.wins}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Wins</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center">
                        <p className="text-3xl font-bold text-gray-600">
                            {club.draws}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Draws</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center">
                        <p className="text-3xl font-bold text-red-600">
                            {club.losses}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Losses</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white rounded-lg shadow-md border border-gray-100 p-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Season Statistics
                    </h2>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">
                                Matches Played
                            </span>
                            <span className="font-semibold">
                                {club.matchesPlayed}
                            </span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">Goals Scored</span>
                            <span className="font-semibold text-green-600">
                                {club.goalsScored}
                            </span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">
                                Goals Conceded
                            </span>
                            <span className="font-semibold text-red-600">
                                {club.goalsAgainst}
                            </span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">
                                Goal Difference
                            </span>
                            <span
                                className={`font-semibold ${
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
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mt-6 text-center"
                >
                    <p className="text-gray-500 italic">
                        More club information, fixtures, and squad details would
                        appear here...
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ClubPage
