import React from 'react'
import { motion } from 'framer-motion'
import { CLUB_COLORS, ROUTES } from '@constants'
import { useNavigate } from 'react-router-dom'

interface ClubHeaderProps {
    club: string
    position: number
    clubLogo?: string
}

const ClubHeader: React.FC<ClubHeaderProps> = ({
    club,
    position,
    clubLogo,
}) => {
    const navigate = useNavigate()

    const onBack = () => {
        navigate(ROUTES.HOME)
    }
    return (
        <>
            <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
                onClick={onBack}
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
                <span className="font-medium">Back to League Standings</span>
            </motion.button>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-6 mb-4"
            >
                <div className="flex items-center gap-6">
                    {clubLogo && (
                        <motion.img
                            src={clubLogo}
                            alt={`${club} logo`}
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
                            {club}
                        </motion.h1>

                        <div
                            className={`h-[3px] w-16 mb-2 ${
                                CLUB_COLORS[club] || 'bg-gray-300'
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
                                #{position}
                            </span>
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ClubHeader
