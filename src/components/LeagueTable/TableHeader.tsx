import { COLUMNS } from './columnConfig'

const TableHeader: React.FC = () => {
    return (
        <div className="flex bg-white font-semibold border-none min-w-max">
            {COLUMNS.map((column) => (
                <div
                    key={column.key}
                    role="columnheader"
                    aria-sort={
                        column.key === 'position' ? 'ascending' : undefined
                    }
                    className={`
                        px-3 md:px-4 py-3 text-center flex-shrink-0 text-xs
                        ${column.width}
                        ${
                            column.sticky
                                ? `sticky ${column.stickyLeft} ${column.zIndex} bg-white`
                                : 'bg-white'
                        }
                        ${column.bold ? 'font-bold' : ''}
                        ${column.key === 'club' ? 'text-left' : ''}
                    `}
                    title={column.title}
                >
                    {column.label}
                </div>
            ))}
        </div>
    )
}

export default TableHeader
