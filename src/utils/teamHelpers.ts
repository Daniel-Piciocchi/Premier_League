import { LeaugeTableRow, TeamStatus } from "../data/types";

/**
 * Convert club name to URL-friendly
 */
export const createTeamId = (ClubName: string): string => {
  return ClubName
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]/g, '');
};

/** Truncate long club names
 * @param name - club name
 * @param maxLength - maximum character length
 */
export const truncateClubName = (name: string, maxLength: number = 15): string => {
  if (name.length <= maxLength) return name;
  return `${name.substring(0, maxLength)}...`;
};

/**
 * Determine team status based on position and table size
 */
export const determineTeamStatus = (
  position: number,
  totalTeams: number,
  relegationZoneSize: number = 3
): TeamStatus => {
  if (position === 1) return TeamStatus.TOP;
  if (position > totalTeams - relegationZoneSize) return TeamStatus.RELEGATION;
  return TeamStatus.NORMAL;
};

/** 
 * Validate that the row data is consistent
 * Wins + Draws + Losses should equal Matches Played
 */
export const validateTableRow = (row: LeaugeTableRow): boolean => {
  const totalMatches = row.wins + row.draws + row.losses;
  return totalMatches === row.matchesPlayed;
};

/**
 * Calcuate points
 * Win = 3 points, Draw = 1 point, Loss = 0 points
 */
export const calculatePoints = (wins: number, draws: number): number => {
  return wins * 3 + draws * 1;
};