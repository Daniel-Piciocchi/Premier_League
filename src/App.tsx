// src/App.tsx

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './pages/HomePage'
import ClubPage from './pages/ClubPage'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <LoadingScreen key="loading" />
                ) : (
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/club/:slug" element={<ClubPage />} />
                    </Routes>
                )}
            </AnimatePresence>
        </>
    )
}

export default App
