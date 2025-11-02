export const Z_INDEX = {
    STICKY_HEADER: 'z-30',
    STICKY_POSITION: 'z-20',
    STICKY_TEAM: 'z-10',
} as const

export const clubRoute = '/club'

export const ROUTES = {
    HOME: '/',
    CLUB: `${clubRoute}/:slug`,
}
