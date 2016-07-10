import { User } from '../model';
import { SocketService } from '../socket';
import { config } from '../config';
export class UserService {
  config: any;
  userEvents: any;
  constructor(private socketService: SocketService) {
    this.config = config.config;
    this.userEvents = this.config.events.user;
  }
  getUser(id: number): User {
    this.socketService.emit(this.userEvents,  {
      id: id
    });

    let user = new User();
    return user;
  }
}
