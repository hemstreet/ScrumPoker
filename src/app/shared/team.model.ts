import User from './user.model';
export class Team {
  id: string;
  tier: string;
  members: User[]
}
