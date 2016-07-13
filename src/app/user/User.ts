import { Vote, Team } from '../model';

export class User {
  team: Team;
  name: string;
  vote: Vote;
  room: number;
  role: string;
}
