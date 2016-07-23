import { Injectable } from '@angular/core';
import { Vote, User } from '../model';
import { UserService } from '../user';
import { SocketService } from '../socket';
import { config } from '../config';
@Injectable()
export class VoteService {
  userEvents: any;
  constructor(
    private userService: UserService,
    private socketService: SocketService) {
    this.userEvents = config.config.events.user;
  }
  vote(vote: Vote) {
    let user: User = <User>this.userService.getUser();

    this.socketService.emit(this.userEvents.userDidVote, {
      user: user,
      vote: vote
    });
  }
}
