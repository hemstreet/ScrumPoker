import { Vote, User } from '../';

export class Room {
  id: number;
  totalVote: Vote[];
  users: User[];
  voted: User[];
}
