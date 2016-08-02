import { Injectable } from '@angular/core';
import { Vote, User } from '../model';
import { UserService } from '../user';
import { SocketService } from '../socket';
import { config } from '../config';

@Injectable()
export class VoteService {
  userEvents: any;
  user: User;
  constructor(
    private userService: UserService,
    private socketService: SocketService) {
    this.userEvents = config.config.events.user;
  }
  vote(vote: Vote): Promise<User> {

    return new Promise((resolve) => {
      let user: User = <User>this.userService.getUser();

      this.socketService.emit(this.userEvents.willVote, {
        user: user,
        vote: vote
      });

      this.socketService.on(this.userEvents.didVote, (data) => {
        resolve(data);
      });
    });
  }
}
