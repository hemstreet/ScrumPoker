import { Base, Vote, Team } from '../model';

export class User extends Base {
  team: Team;
  name: string;
  vote: Vote;
  room: number;
  role: string;
}
