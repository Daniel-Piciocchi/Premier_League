// src/pages/HomePage.tsx

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mockLeagueData } from '../data/mockData'
import { LeagueTable } from '../components/LeagueTable'

const HomePage: React.FC = () => {
    const navigate = useNavigate()

    const handleClubClick = (slug: string) => {
        navigate(`/club/${slug}`)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg"></div>
                    <div className="relative p-6 bg-white/80 backdrop-blur rounded-lg shadow-sm border border-gray-200">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                            Premier Leauge Standings
                        </h1>
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="font-semibold text-purple-600">
                                2024/25
                            </span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>25 matches played</span>
                        </div>
                    </div>
                </div>
                {/* Legend */}
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-50 border-2 border-blue-400 rounded flex items-center justify-center">
                                <span className="text-blue-600 text-xs font-bold">
                                    1
                                </span>
                            </div>
                            <span className="text-sm font-medium">
                                Champions League
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-red-50 border-2 border-red-400 rounded flex items-center justify-center">
                                <span className="text-red-600 text-xs font-bold">
                                    ↓
                                </span>
                            </div>
                            <span className="text-sm font-medium">
                                Relegation Zone
                            </span>
                        </div>
                    </div>
                </div>
                {/* Table */}
                <LeagueTable
                    teams={mockLeagueData}
                    onClubClick={handleClubClick}
                />
                {/* Footer note */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Scroll horizontally and vertically to view all data</p>
                </div>
            </div>
        </motion.div>
    )
}

export default HomePage
