import { type LeagueTableRow } from '../../data/types'
import TableHeader from './TableHeader'
import { Z_INDEX } from '@constants'
import TableRow from './TableRow'

interface LeagueTableProps {
    teams: LeagueTableRow[]
    scrollRef?: React.RefObject<HTMLDivElement>
}

const LeagueTable: React.FC<LeagueTableProps> = ({ teams, scrollRef }) => {
    return (
        <div
            className="w-full max-w-fit bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            role="table"
            aria-label="Premier League Standings Table"
        >
            <div
                ref={scrollRef}
                className="overflow-auto max-h-[600px] md:max-h-none custom-scrollbar"
            >
                <div
                    className={`sticky top-0 ${Z_INDEX.STICKY_HEADER} bg-white`}
                    role="rowgroup"
                >
                    <TableHeader />
                </div>

                <div role="rowgroup">
                    {teams.map((team) => (
                        <TableRow key={team.position} team={team} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeagueTable
