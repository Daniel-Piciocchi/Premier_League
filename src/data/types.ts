/**
 * Represent the result of a single match in the Last 5
 */
export type MatchResult = 'Win' | 'Draw' | 'Loss'

/**
 * Team status determines visual styling
 */
export enum TeamStatus {
    NORMAL = 'normal',
    TOP = 'top', // 1st place - champion position
    RELEGATION = 'relegation', // bottom 3 - relagation zone
}

/**
 * Main data structure for a single team's League table row
 */
export interface LeagueTableRow {
    position: number
    club: string
    matchesPlayed: number
    wins: number
    draws: number
    losses: number
    goalsScored: number
    goalsAgainst: number
    goalDifference: number
    points: number
    last5: MatchResult[]
    status: TeamStatus
    isClickable?: boolean // for teams with dedicated pages
    clubSlug?: string // url-friendly version for routing (example: "Liverpool")
    clubLogo?: string
}

/**
 * Configuration for the league table
 */
export interface LeagueTableConfig {
    relegationZoneSize: number // how many teams get relegated (usually 3)
    highlightTopTeam: boolean
    highlightRelegationZone: boolean
}
