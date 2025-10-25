// src/components/LeagueTable/TableBody.tsx

import { type LeagueTableRow } from '../../data/types';
import TableRow from './TableRow';

interface TableBodyProps {
  teams: LeagueTableRow[];
  onClubClick?: (slug: string) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ teams, onClubClick }) => {
  return (
    <div>
      {teams.map((team) => (
        <TableRow 
          key={team.position} 
          team={team} 
          onClubClick={onClubClick}
        />
      ))}
    </div>
  );
};

export default TableBody;