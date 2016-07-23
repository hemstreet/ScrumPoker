import { Base } from './Base';
import { User } from '../';

export class Team extends Base {
  id: string;
  tier: string;
  members: User[];
}
