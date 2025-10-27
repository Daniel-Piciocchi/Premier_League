import { Z_INDEX } from './constants'

export interface ColumnConfig {
    key: string
    label: string
    title: string
    width: string
    sticky?: boolean
    stickyLeft?: string
    bold?: boolean
    zIndex?: string
}

export const COLUMNS: ColumnConfig[] = [
    {
        key: 'position',
        label: 'Pos',
        title: 'Position',
        width: 'w-[80px]',
        sticky: true,
        stickyLeft: 'left-0',
        zIndex: Z_INDEX.STICKY_POSITION,
    },
    {
        key: 'club',
        label: 'Team',
        title: 'Club / Team',
        width: 'w-[140px]',
        sticky: true,
        stickyLeft: 'left-[80px]',
        zIndex: Z_INDEX.STICKY_TEAM,
    },
    {
        key: 'matchesPlayed',
        label: 'PL',
        title: 'Matches Played',
        width: 'w-[120px]',
    },
    {
        key: 'wins',
        label: 'W',
        title: 'Wins',
        width: 'w-[70px]',
    },
    {
        key: 'draws',
        label: 'D',
        title: 'Draws',
        width: 'w-[70px]',
    },
    {
        key: 'losses',
        label: 'L',
        title: 'Losses',
        width: 'w-[70px]',
    },
    {
        key: 'goalsScored',
        label: 'GF',
        title: 'Goals For',
        width: 'w-[110px]',
    },
    {
        key: 'goalsAgainst',
        label: 'GA',
        title: 'Goals Against',
        width: 'w-[110px]',
    },
    {
        key: 'goalDifference',
        label: 'GD',
        title: 'Goal Difference',
        width: 'w-[120px]',
    },
    {
        key: 'points',
        label: 'Pts',
        title: 'Points',
        width: 'w-[80px]',
        bold: true,
    },
    {
        key: 'last5',
        label: 'Last 5',
        title: 'Last 5 Matches',
        width: 'w-[180px]',
    },
]
