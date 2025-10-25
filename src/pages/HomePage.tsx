// src/pages/HomePage.tsx

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { mockLeagueData } from '../data/mockData'
import { LeagueTable } from '../components/LeagueTable'

const HomePage: React.FC = () => {
    const navigate = useNavigate()
    const tableRef = useRef<HTMLDivElement>(null)

    const handleClubClick = (slug: string) => {
        navigate(`/club/${slug}`)
    }

    const scrollToTop = () => {
        if (tableRef.current) {
            const scrollContainer =
                tableRef.current.querySelector('.overflow-auto')
            if (scrollContainer) {
                // Scroll within table
                scrollContainer.scrollTo({ top: 0, behavior: 'smooth' })

                // On mobile, also scroll page to show top of table
                if (window.innerWidth < 768) {
                    tableRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
            }
        }
    }

    const scrollToBottom = () => {
        if (tableRef.current) {
            const scrollContainer =
                tableRef.current.querySelector('.overflow-auto')
            if (scrollContainer) {
                // Scroll within table to bottom
                const maxScroll =
                    scrollContainer.scrollHeight - scrollContainer.clientHeight
                scrollContainer.scrollTo({
                    top: maxScroll,
                    behavior: 'smooth',
                })

                // On mobile, scroll page to show bottom of table
                if (window.innerWidth < 768) {
                    setTimeout(() => {
                        tableRef.current?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'end',
                        })
                    }, 100)
                }
            }
        }
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
                            Premier League Standings
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
                        {/* Top 4 - Clickable */}
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 group transition-all active:scale-95"
                        >
                            <div className="h-6 px-2 flex items-center justify-center rounded-md bg-blue-50 border border-blue-400 group-active:bg-blue-100 group-active:border-blue-500 transition-colors cursor-pointer">
                                <span className="text-blue-700 text-[11px] font-semibold tracking-wide">
                                    ↑ TOP 4
                                </span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-active:text-blue-700 transition-colors">
                                Champions League
                            </span>
                        </button>

                        {/* Bottom 3 - Clickable */}
                        <button
                            onClick={scrollToBottom}
                            className="flex items-center gap-2 group transition-all active:scale-95"
                        >
                            <div className="h-6 px-2 flex items-center justify-center rounded-md bg-red-50 border border-red-400 group-active:bg-red-100 group-active:border-red-500 transition-colors cursor-pointer">
                                <span className="text-red-700 text-[11px] font-semibold tracking-wide">
                                    ↓ BOT 3
                                </span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-active:text-red-700 transition-colors">
                                Relegation Zone
                            </span>
                        </button>
                    </div>
                </div>

                {/* Table with ref */}
                <div ref={tableRef}>
                    <LeagueTable
                        teams={mockLeagueData}
                        onClubClick={handleClubClick}
                    />
                </div>

                {/* Footer note */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Scroll horizontally and vertically to view all data</p>
                </div>
            </div>
        </motion.div>
    )
}

export default HomePage
