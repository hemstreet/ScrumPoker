import { Injectable } from '@angular/core';
import { User } from '../model';
import { SocketService } from '../socket';
import { config } from '../config';

@Injectable()
export class UserService {
  config: any;
  userEvents: any;
  currentUser: User;
  constructor(private socketService: SocketService) {
    this.config = config.config;
    this.userEvents = this.config.events.user;
    this.initializeUser();
  }

  initializeUser(): User {
    this.currentUser = new User({
      name: 'ourUser'
    });
    return this.currentUser;
  }

  getUserById(id: number): User {
    this.socketService.emit(this.userEvents,  {
      id: id
    });

    // Simulated user return
    return new User({
      name: 'adsf'
    });
  }

  getUser() {
    return this.currentUser;
  }

  getUserList(): User[] {
    return  [new User({
      name: 'test'
    }), new User({
      name: 'user 2'
    }), new User({
      name: 'asdfg'
    }), new User({
      name: 'fdsa'
    })];
  }

  kickUser(roomId: number, user: User) {
    console.log('kicking', user, 'from', roomId);
  }
}
