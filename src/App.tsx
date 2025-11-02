import { useLoading } from '@hooks/common'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/common/LoadingScreen'
import ClubPage from './pages/ClubPage'
import HomePage from './pages/HomePage'

function App() {
    const isLoading = useLoading()

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
