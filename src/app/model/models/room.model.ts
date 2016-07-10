import { Vote } from './vote.model';
import { User } from './user.model';
export class Room {
  id: number;
  totalVote: Vote[];
  users: User[];
  voted: User[];
}
