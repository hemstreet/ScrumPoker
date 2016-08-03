import { Base } from '../model/models/Base';
import { User } from '../model';

export class Team extends Base {
  id: string;
  tier: string;
  members: User[];
}
