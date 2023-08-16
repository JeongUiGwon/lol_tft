import LeagueItemDTO from './LeagueItemDTO';

export default interface LeagueListDTO {
  leagueId: string;
  entries: LeagueItemDTO[];
  tier: string;
  name: string;
  queue: string;
}
