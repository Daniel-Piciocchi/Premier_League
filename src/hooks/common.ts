import { useEffect, useState } from 'react'

/**
 * useLoading - simple hook that returns a boolean isLoading which becomes false after the given duration
 * @param duration time in ms to show the loading screen (default 3000)
 */
export function useLoading(duration = 3000) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), duration)
        return () => clearTimeout(timer)
    }, [duration])

    return isLoading
}