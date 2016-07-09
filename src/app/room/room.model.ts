import Vote from '../shared/vote.model';
import User from '../shared/user.model';
export class Room {
  id: number;
  totalVote: Vote[];
  users: User[],
  voted: User[]
}
