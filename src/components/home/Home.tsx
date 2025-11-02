import { motion } from 'framer-motion'
import { useRef } from 'react'
import { LeagueTable } from '.'
import { mockLeagueData } from '../../data/mockData'
import HomeHeader from './HomeHeader'

const Home: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null!)

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
            <div className="w-full max-w-fit mx-auto">
                <HomeHeader
                    onScrollTop={scrollToTop}
                    onScrollBottom={scrollToBottom}
                />

                <LeagueTable
                    teams={mockLeagueData}
                    scrollRef={scrollRef}
                />
            </div>
        </motion.div>
    )
}

export default Home
