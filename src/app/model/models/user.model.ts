import { Vote } from './vote.model';
import { Team } from './team.model';
export class User {
  team: Team;
  name: string;
  vote: Vote;
  room: number;
  role: string;
}
