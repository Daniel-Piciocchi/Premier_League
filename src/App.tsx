// src/App.tsx

import { mockLeagueData, defaultTableConfig } from './data/mockData'
import { validateTableRow } from './utils/teamHelpers'

function App() {
    // Quick validation check
    const isDataValid = mockLeagueData.every(validateTableRow)

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">
                    League Table UI - Data Check
                </h1>

                <div className="bg-white rounded-lg shadow p-6 mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Data Validation
                    </h2>
                    <p className="mb-2">
                        Total Teams:{' '}
                        <span className="font-bold">
                            {mockLeagueData.length}
                        </span>
                    </p>
                    <p className="mb-2">
                        Data Valid:{' '}
                        <span
                            className={`font-bold ${
                                isDataValid ? 'text-green-600' : 'text-red-600'
                            }`}
                        >
                            {isDataValid ? '✓ Yes' : '✗ No'}
                        </span>
                    </p>
                    <p>
                        Relegation Zone Size:{' '}
                        <span className="font-bold">
                            {defaultTableConfig.relegationZoneSize}
                        </span>
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Sample Data (Top 5)
                    </h2>
                    <div className="space-y-2">
                        {mockLeagueData.slice(0, 5).map((team) => (
                            <div key={team.position} className="border-b pb-2">
                                <p className="font-semibold">
                                    {team.position}. {team.club}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Points: {team.points} | Status:{' '}
                                    {team.status}
                                    {team.isClickable && ' | 🔗 Clickable'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
