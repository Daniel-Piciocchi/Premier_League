import React from 'react'
import { motion } from 'framer-motion'
import { formatGoalDifference } from '../../utils/teamHelpers'
import { LeagueTableRow } from 'src/data/types'

interface ClubStatsProps {
    club: LeagueTableRow
}

const ClubStats: React.FC<ClubStatsProps> = ({ club }) => {
    const {
        points,
        wins,
        draws,
        losses,
        matchesPlayed,
        goalsScored,
        goalsAgainst,
        goalDifference,
    } = club

    return (
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b-2 border-gray-200">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">
                            {points}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Points</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-600">
                            {wins}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Wins</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-gray-600">
                            {draws}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Draws</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-red-600">
                            {losses}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Losses</p>
                    </div>
                </div>
                <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Matches Played</span>
                        <span className="font-semibold text-lg">
                            {matchesPlayed}
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-gray-100">
                        <span className="text-gray-600">Goals Scored</span>
                        <span className="font-semibold text-lg text-green-600">
                            {goalsScored}
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-gray-100">
                        <span className="text-gray-600">Goals Conceded</span>
                        <span className="font-semibold text-lg text-red-600">
                            {goalsAgainst}
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-gray-100">
                        <span className="text-gray-600">Goal Difference</span>
                        <span
                            className={`font-semibold text-lg ${
                                goalDifference > 0
                                    ? 'text-green-600'
                                    : goalDifference < 0
                                    ? 'text-red-600'
                                    : 'text-gray-600'
                            }`}
                        >
                            {formatGoalDifference(goalDifference)}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ClubStats
