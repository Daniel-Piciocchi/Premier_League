import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mockLeagueData } from '../../data/mockData'
import { ClubHeader, ClubStats } from '.'
import { ROUTES } from '@constants/common'

const Club: React.FC = () => {
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
                        onClick={() => navigate(ROUTES.HOME)}
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
                <ClubHeader
                    club={club.club}
                    position={club.position}
                    clubLogo={club.clubLogo}
                />

                <ClubStats
                    points={club.points}
                    wins={club.wins}
                    draws={club.draws}
                    losses={club.losses}
                    matchesPlayed={club.matchesPlayed}
                    goalsScored={club.goalsScored}
                    goalsAgainst={club.goalsAgainst}
                    goalDifference={club.goalDifference}
                />
            </div>
        </motion.div>
    )
}

export default Club