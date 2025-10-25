// src/components/LoadingScreen.tsx

import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-[#E8365D] via-[#3B5EFF] to-[#E8365D] flex items-center justify-center z-50"
        >
            <div className="text-center">
                {/* Premier League Logo - ORIGINAL COLORS */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg"
                        alt="Premier League"
                        className="w-48 h-48 mx-auto drop-shadow-2xl"
                    />
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h2 className="text-white text-2xl font-bold mb-4">
                        Loading Premier League Standings
                    </h2>
                    <p className="text-gray-100 text-lg mb-6">
                        Fetching the latest standings...
                    </p>
                </motion.div>

                {/* Animated Dots */}
                <motion.div
                    className="flex justify-center gap-2 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="w-3 h-3 bg-white rounded-full"
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default LoadingScreen
