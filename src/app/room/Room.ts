import { Vote, User } from '../model';

export class Room {
  id: number;
  totalVote: Vote[];
  users: User[];
  voted: User[];
}
