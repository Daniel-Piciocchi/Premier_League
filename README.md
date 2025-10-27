# Premier League Table

A modern, interactive Premier League standings table built with React, TypeScript, and Tailwind CSS. Features horizontal scrolling, sticky columns, and team detail pages.

## Features

-   **Live Standings Table** - Real-time Premier League standings with all statistics
-   **Sticky Columns** - Position and Team columns stay fixed during horizontal scroll
-   **Sticky Header** - Column headers remain visible during vertical scroll
-   **Color-Coded Rows** - Visual indicators for Champions League spots (top 4) and relegation zone (bottom 3)
-   **Team Detail Pages** - Click any team to view detailed statistics
-   **Fully Responsive** - Optimized for mobile, tablet, and desktop
-   **Smooth Animations** - Powered by Framer Motion
-   **TypeScript** - Fully typed for better developer experience
-   **Accessible** - ARIA labels, keyboard navigation, and screen reader support

## Quick Start

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/premier-league-table.git

# Navigate to project directory
cd premier-league-table

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Stack

-   **React 18** - UI framework
-   **TypeScript** - Type safety
-   **Vite** - Build tool and dev server
-   **Tailwind CSS** - Styling
-   **Framer Motion** - Animations
-   **React Router** - Client-side routing

## Project Structure

```
src/
├── components/
│   └── LeagueTable/
│       ├── columnConfig.ts      # Column definitions (single source of truth)
│       ├── constants.ts         # Z-index values
│       ├── Last5Badge.tsx       # Match result badges
│       ├── LeagueTable.tsx      # Main table component
│       ├── TableHeader.tsx      # Sticky header
│       └── TableRow.tsx         # Individual team rows
├── data/
│   ├── mockData.ts             # Premier League team data
│   └── types.ts                # TypeScript interfaces
├── pages/
│   ├── ClubPage.tsx            # Team detail page
│   └── HomePage.tsx            # Main standings page
├── utils/
│   └── teamHelpers.ts          # Utility functions
└── App.tsx                     # Root component
```

## Design Decisions

### Dynamic Data Generation

-   Team status (top/normal/relegation) calculated automatically based on position
-   URL slugs generated dynamically from team names
-   No hardcoded values - single source of truth pattern

### Component Architecture

-   Column configuration shared between header and rows
-   DRY principles - eliminated duplicate code
-   Type-safe with TypeScript interfaces

### Responsive Design

-   Horizontal scrolling for wide tables on mobile
-   Vertical scrolling disabled on larger screens (iPad+) where all rows fit
-   Sticky positioning works on both axes

### Accessibility

-   Semantic HTML with proper ARIA roles (`table`, `row`, `columnheader`)
-   Keyboard navigation - Tab through rows, Enter to view team details
-   Screen reader support with descriptive labels
-   Focus indicators for keyboard users
-   Ensures usability for users with disabilities

## Data Structure

Each team row contains:

-   Position, club name, matches played
-   Wins, draws, losses
-   Goals scored, goals against, goal difference
-   Total points
-   Last 5 match results
-   Dynamically calculated status and slug

## Customization

### Update Team Data

Edit `src/data/mockData.ts` to modify team statistics.

### Adjust Colors

-   Top 4 highlighting: Modify in `TableRow.tsx` (`'top'` status)
-   Relegation zone: Modify in `TableRow.tsx` (`'relegation'` status)
-   Team colors: Update `CLUB_COLORS` in `ClubPage.tsx`

### Column Configuration

Add/remove columns in `src/components/LeagueTable/columnConfig.ts`.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Future Enhancements

-   [ ] Connect to live Premier League API
-   [ ] Add sorting functionality
-   [ ] Add filtering by team
-   [ ] Add historical data/season selector
-   [ ] Add head-to-head comparisons
-   [ ] Add player statistics per team

## License

MIT License - feel free to use this project for learning or your own applications.

## Acknowledgments

-   Team badges from [Wikimedia Commons](https://commons.wikimedia.org/)
-   Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
