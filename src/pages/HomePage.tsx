import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { mockLeagueData } from '../data/mockData'
import { LeagueTable } from '../components/LeagueTable'

const HomePage: React.FC = () => {
    const navigate = useNavigate()
    const scrollRef = useRef<HTMLDivElement>(null!)

    const handleClubClick = (slug: string) => {
        navigate(`/club/${slug}`)
    }

    const scrollToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const scrollToBottom = () => {
        if (scrollRef.current) {
            const maxScroll =
                scrollRef.current.scrollHeight - scrollRef.current.clientHeight
            scrollRef.current.scrollTo({ top: maxScroll, behavior: 'smooth' })
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 p-4 md:p-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="w-full max-w-fit mx-auto">
                    <div className="mb-4 relative rounded-lg overflow-visible">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg"></div>
                        <div className="relative p-4 backdrop-blur rounded-lg shadow-[0_4px_12px_rgba(160,130,255,0.12)]">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Premier League Standings
                            </h1>
                            <div className="flex items-center gap-3 text-gray-600 mb-3">
                                <span className="font-semibold text-purple-600">
                                    2024-2025
                                </span>
                            </div>

                            <div className="hidden md:flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-5 px-2 inline-flex items-center justify-center rounded-full bg-blue-200 text-[11px] font-medium text-blue-900">
                                        Top 4
                                    </span>
                                    <span className="text-sm font-medium text-gray-700">
                                        Champions League
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="h-5 px-2 inline-flex items-center justify-center rounded-full bg-red-200 text-[11px] font-medium text-red-900">
                                        Bottom 3
                                    </span>
                                    <span className="text-sm font-medium text-gray-700">
                                        Relegation Zone
                                    </span>
                                </div>
                            </div>

                            <div className="md:hidden flex flex-wrap items-center gap-4">
                                <button
                                    onClick={scrollToTop}
                                    className="flex items-center gap-2 active:scale-95 transition-transform"
                                >
                                    <span className="h-5 px-2 inline-flex items-center justify-center rounded-full bg-blue-200 text-[11px] font-medium text-blue-900">
                                        Top 4
                                    </span>
                                    <span className="text-sm font-medium text-gray-700">
                                        Champions League
                                    </span>
                                </button>

                                <button
                                    onClick={scrollToBottom}
                                    className="flex items-center gap-2 active:scale-95 transition-transform"
                                >
                                    <span className="h-5 px-2 inline-flex items-center justify-center rounded-full bg-red-200 text-[11px] font-medium text-red-900">
                                        Bottom 3
                                    </span>
                                    <span className="text-sm font-medium text-gray-700">
                                        Relegation Zone
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <LeagueTable
                        teams={mockLeagueData}
                        onClubClick={handleClubClick}
                        scrollRef={scrollRef}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default HomePage
