// src/components/LeagueTable/LeagueTable.tsx

import { type LeagueTableRow } from '../../data/types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

interface LeagueTableProps {
    teams: LeagueTableRow[]
    onClubClick?: (slug: string) => void
}

const LeagueTable: React.FC<LeagueTableProps> = ({ teams, onClubClick }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Table container with overflow - ADD custom-scrollbar CLASS */}
            <div className="overflow-auto max-h-[600px] custom-scrollbar">
                {/* Sticky header */}
                <div className="sticky top-0 z-30">
                    <TableHeader />
                </div>

                {/* Table body */}
                <TableBody teams={teams} onClubClick={onClubClick} />
            </div>
        </div>
    )
}

export default LeagueTable
