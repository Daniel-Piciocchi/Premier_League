// src/components/LeagueTable/TableHeader.tsx

interface TableHeaderProps {
    className?: string
}

const TableHeader: React.FC<TableHeaderProps> = ({ className = '' }) => {
    return (
        <div className="flex bg-white font-semibold border-none min-w-max">
            <div
                className="sticky left-0 z-40 bg-white px-3 md:px-4 py-3 text-center w-[80px] flex-shrink-0 text-xs"
                title="Position"
            >
                Pos
            </div>

            <div
                className="sticky left-[80px] z-30 bg-white text-center px-3 md:px-4 py-3 text-left w-[170px] flex-shrink-0 text-xs"
                title="Club / Team"
            >
                Team
            </div>

            <div
                className="bg-white px-3 py-3 text-center w-[120px] flex-shrink-0 text-xs"
                title="Matches Played"
            >
                PL
            </div>
            <div
                className="bg-white px-3 py-3 text-center w-[70px] flex-shrink-0 text-xs"
                title="Wins"
            >
                W
            </div>
            <div
                className="bg-white px-3 py-3 text-center w-[70px] flex-shrink-0 text-xs"
                title="Draws"
            >
                D
            </div>
            <div
                className="bg-white px-3 py-3 text-center w-[70px] flex-shrink-0 text-xs"
                title="Losses"
            >
                L
            </div>
            <div
                className="bg-white px-3 py-3 text-center w-[110px] flex-shrink-0 text-xs"
                title="Goals For"
            >
                GF
            </div>
            <div
                className="bg-white px-3 py-3 text-center w-[110px] flex-shrink-0 text-xs"
                title="Goals Against"
            >
                GA
            </div>
            <div
                className="bg-white px-3 py-3 text-center w-[120px] flex-shrink-0 text-xs"
                title="Goal Difference"
            >
                GD
            </div>
            <div
                className="bg-white px-3 py-3 text-center font-bold w-[80px] flex-shrink-0 text-xs"
                title="Points"
            >
                Pts
            </div>
            <div
                className="bg-white px-3 py-3 text-center w-[180px] flex-shrink-0 text-xs"
                title="Last 5 Matches"
            >
                Last 5
            </div>
        </div>
    )
}

export default TableHeader
