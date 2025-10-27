// src/components/LeagueTable/LeagueTable.tsx

import { type LeagueTableRow } from '../../data/types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

interface LeagueTableProps {
    teams: LeagueTableRow[]
    onClubClick?: (slug: string) => void
    scrollRef?: React.RefObject<HTMLDivElement> // ADD THIS
}

const LeagueTable: React.FC<LeagueTableProps> = ({
    teams,
    onClubClick,
    scrollRef,
}) => {
    // ADD scrollRef here
    return (
        <div className="w-full max-w-fit bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            {/* Table container with overflow - attach scrollRef */}
            <div
                ref={scrollRef}
                className="overflow-auto max-h-[600px] md:max-h-none custom-scrollbar"
            >
                {/* Sticky header */}
                <div className="sticky top-0 z-40 bg-white">
                    <TableHeader />
                </div>

                <TableBody teams={teams} onClubClick={onClubClick} />
            </div>
        </div>
    )
}

export default LeagueTable
