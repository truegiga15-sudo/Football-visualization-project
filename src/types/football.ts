export interface Coordinate {
  x: number;
  y: number;
}
export interface Team {
  id: string;
  name: string;
}
export interface Player {
  id: string;
  name: string;
  teamId: string;
  position?: string;
}
export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  kickoff?: string;
  competition?: string;
  season?: string;
}
export interface Event {
  id: string;
  matchId: string;
  teamId: string;
  playerId?: string;
  type: string;
  timestamp: string;
  location?: Coordinate;
}
export interface FreezeFrame {
  playerId?: string;
  teammate: boolean;
  location: Coordinate;
  actor: boolean;
  keeper: boolean;
}
export interface TimelineEvent {
  id: string;
  minute: number;
  second: number;
  label: string;
  eventId?: string;
}
export interface Visualization {
  id: string;
  name: string;
  description?: string;
  supportedEventTypes: readonly string[];
}
export interface Filters {
  teamIds?: readonly string[];
  playerIds?: readonly string[];
  eventTypes?: readonly string[];
  minuteRange?: readonly [number, number];
}
