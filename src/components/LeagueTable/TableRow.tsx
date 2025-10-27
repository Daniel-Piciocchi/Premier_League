import { type LeagueTableRow } from '../../data/types'
import Last5Badge from './Last5Badge'
import { COLUMNS } from './columnConfig'
import { formatGoalDifference } from '../../utils/teamHelpers'

interface TableRowProps {
    team: LeagueTableRow
    onClubClick?: (slug: string) => void
}

const TableRow: React.FC<TableRowProps> = ({ team, onClubClick }) => {
    const getRowBgClasses = () => {
        switch (team.status) {
            case 'top':
                return 'bg-blue-50 hover:bg-blue-100'
            case 'relegation':
                return 'bg-red-50 hover:bg-red-100'
            default:
                return 'bg-white hover:bg-gray-50'
        }
    }

    const handleClubClick = () => {
        if (team.clubSlug && onClubClick) onClubClick(team.clubSlug)
    }

    const renderCell = (column: (typeof COLUMNS)[0]) => {
        const baseClasses = `
    px-3 md:px-4 py-3 flex-shrink-0 text-xs md:text-sm
    ${column.width}
    ${
        column.sticky
            ? `sticky ${column.stickyLeft} ${column.zIndex} bg-inherit`
            : ''
    }
    ${column.bold ? 'font-bold' : ''}
`

        switch (column.key) {
            case 'position':
                return (
                    <div
                        key={column.key}
                        className={`${baseClasses} font-semibold flex items-center justify-center`}
                    >
                        {team.position}
                    </div>
                )

            case 'club':
                return (
                    <div
                        key={column.key}
                        className={`${baseClasses} flex items-center`}
                    >
                        <button
                            onClick={handleClubClick}
                            aria-label={`View details for ${team.club}`}
                            className="text-blue-600 hover:text-blue-800 hover:underline font-medium w-full flex items-center justify-start gap-2 transition-colors"
                            title={team.club}
                        >
                            {team.clubLogo && (
                                <img
                                    src={team.clubLogo}
                                    alt={`${team.club} logo`}
                                    className="w-5 h-5 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none'
                                    }}
                                />
                            )}
                            <span className="whitespace-nowrap leading-none">
                                {team.club}
                            </span>
                        </button>
                    </div>
                )

            case 'goalDifference':
                return (
                    <div
                        key={column.key}
                        className={`${baseClasses} flex items-center justify-center text-center`}
                    >
                        {formatGoalDifference(team.goalDifference)}
                    </div>
                )

            case 'last5':
                return (
                    <div key={column.key} className={baseClasses}>
                        <Last5Badge results={team.last5} />
                    </div>
                )

            default:
                return (
                    <div
                        key={column.key}
                        className={`${baseClasses} flex items-center justify-center text-center`}
                    >
                        {team[column.key as keyof LeagueTableRow]}
                    </div>
                )
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClubClick()
        }
    }

    return (
        <div
            role="row"
            tabIndex={0}
            onKeyDown={handleKeyPress}
            className={`flex min-w-max transition-colors ${getRowBgClasses()} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
            {COLUMNS.map(renderCell)}
        </div>
    )
}

export default TableRow
