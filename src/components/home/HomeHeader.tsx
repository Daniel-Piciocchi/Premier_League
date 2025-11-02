import React from 'react'

type Props = {
    season?: string
    onScrollTop: () => void
    onScrollBottom: () => void
}

const HomeHeader: React.FC<Props> = ({
    season = '2024-2025',
    onScrollTop,
    onScrollBottom,
}) => {
    return (
        <div className="mb-4 relative rounded-lg overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg"></div>
            <div className="relative p-4 backdrop-blur rounded-lg shadow-[0_4px_12px_rgba(160,130,255,0.12)]">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Premier League Standings
                </h1>
                <div className="flex items-center gap-3 text-gray-600 mb-3">
                    <span className="font-semibold text-purple-600">
                        {season}
                    </span>
                </div>

                <div className="hidden md:flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="h-5 px-2 inline-flex items-center justify-center rounded-full bg-blue-200 text-[11px] font-medium text-blue-900">
                            Top 4
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            Champions League
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="h-5 px-2 inline-flex items-center justify-center rounded-full bg-red-200 text-[11px] font-medium text-red-900">
                            Bottom 3
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            Relegation Zone
                        </span>
                    </div>
                </div>

                <div className="md:hidden flex flex-wrap items-center gap-4">
                    <button
                        onClick={onScrollTop}
                        className="flex items-center gap-2 active:scale-95 transition-transform"
                    >
                        <span className="h-5 px-2 inline-flex items-center justify-center rounded-full bg-blue-200 text-[11px] font-medium text-blue-900">
                            Top 4
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            Champions League
                        </span>
                    </button>

                    <button
                        onClick={onScrollBottom}
                        className="flex items-center gap-2 active:scale-95 transition-transform"
                    >
                        <span className="h-5 px-2 inline-flex items-center justify-center rounded-full bg-red-200 text-[11px] font-medium text-red-900">
                            Bottom 3
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            Relegation Zone
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
