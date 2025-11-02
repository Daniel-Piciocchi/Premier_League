export type MatchResult = 'Win' | 'Draw' | 'Loss'

export type TeamStatus = 'normal' | 'top' | 'europa' | 'relegation'
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
    clubSlug?: string
    clubLogo?: string
}
