// src/App.tsx

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { mockLeagueData } from './data/mockData'
import { LeagueTable } from './components/LeagueTable'
import LoadingScreen from './components/LoadingScreen'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 5000) // 2.5 seconds loading time

        return () => clearTimeout(timer)
    }, [])

    const handleClubClick = (slug: string) => {
        console.log('Club clicked:', slug)
        alert(`Navigating to: /club/${slug}`)
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <LoadingScreen key="loading" />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8"
                    >
                        <div className="max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="mb-6">
                                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                    Premier League Table
                                </h1>
                                <p className="text-gray-600">
                                    Season 2024/25 • 25 matches played
                                </p>
                            </div>

                            {/* Legend */}
                            <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
                                    <span>Champions League</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
                                    <span>Relegation Zone</span>
                                </div>
                            </div>

                            {/* Table */}
                            <LeagueTable
                                teams={mockLeagueData}
                                onClubClick={handleClubClick}
                            />

                            {/* Footer note */}
                            <div className="mt-6 text-center text-sm text-gray-500">
                                <p>
                                    Scroll horizontally and vertically to view
                                    all data
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default App
