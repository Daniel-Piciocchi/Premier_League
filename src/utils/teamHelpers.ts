import { type TeamStatus } from '../data/types'

export const generateClubSlug = (clubName: string): string => {
    return clubName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
}

export const determineTeamStatus = (
    position: number,
    totalTeams: number,
    relegationZoneSize: number = 3,
    topZoneSize: number = 4,
    europaPosition: number = 5
): TeamStatus => {
    if (position <= topZoneSize) return 'top'
    if (position === europaPosition) return 'europa'
    if (position > totalTeams - relegationZoneSize) return 'relegation'
    return 'normal'
}

export const formatGoalDifference = (goalDifference: number): string => {
    return goalDifference > 0 ? `+${goalDifference}` : `${goalDifference}`
}
