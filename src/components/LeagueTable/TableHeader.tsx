// src/components/LeagueTable/TableHeader.tsx

interface TableHeaderProps {
    className?: string
}

const TableHeader: React.FC<TableHeaderProps> = ({ className = '' }) => {
    return (
        <div
            className={`flex bg-gray-100 border-b-2 border-gray-300 font-semibold text-sm min-w-max ${className}`}
        >
            {/* Sticky columns - RESPONSIVE WIDTHS */}
            <div className="sticky left-0 z-20 bg-gray-100 px-3 md:px-4 py-3 border-r border-gray-300 w-[86px] flex-shrink-0 text-xs md:text-sm text-center">
                Position
            </div>
            <div className="sticky left-[86px] z-20 bg-gray-100 px-3 md:px-4 py-3 border-r-2 border-gray-300 w-[120px] md:w-[180px] flex-shrink-0 text-xs md:text-sm text-center">
                Club
            </div>

            {/* Scrollable columns - all with fixed widths */}
            <div className="px-3 py-3 text-center border-r border-gray-300 w-[140px] flex-shrink-0 text-xs md:text-sm">
                Matches played
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-300 w-[90px] flex-shrink-0 text-xs md:text-sm">
                Wins
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-300 w-[90px] flex-shrink-0 text-xs md:text-sm">
                Draws
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-300 w-[90px] flex-shrink-0 text-xs md:text-sm">
                Losses
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-300 w-[120px] flex-shrink-0 text-xs md:text-sm">
                Goals scored
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-300 w-[120px] flex-shrink-0 text-xs md:text-sm">
                Goals against
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-300 w-[140px] flex-shrink-0 text-xs md:text-sm">
                Goal difference
            </div>
            <div className="px-3 py-3 text-center border-r border-gray-300 font-bold w-[100px] flex-shrink-0 text-xs md:text-sm">
                Points
            </div>
            <div className="px-3 py-3 text-center w-[200px] flex-shrink-0 text-xs md:text-sm">
                Last 5
            </div>
        </div>
    )
}

export default TableHeader
