import { Base, User } from '../model';

export class Vote extends Base {
  owner: User;
  vote: number;
}
