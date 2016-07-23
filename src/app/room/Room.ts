import { Base, Vote, User } from '../model';

export class Room extends Base {
  id: number;
  totalVote: Vote[];
  users: User[];
  voted: User[];
}
