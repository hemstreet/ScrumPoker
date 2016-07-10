import { Vote, Team } from '../';

export class User {
  team: Team;
  name: string;
  vote: Vote;
  room: number;
  role: string;
}
