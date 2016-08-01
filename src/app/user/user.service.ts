import { Injectable } from '@angular/core';
import { User } from '../model';
import { SocketService } from '../socket';
import { config } from '../config';

@Injectable()
export class UserService {
  config: any;
  socket: SocketService;
  userEvents: any;
  currentUser: User;
  constructor(private socketService: SocketService) {
    this.config = config.config;
    this.socket = this.socketService.get();
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

  getUserListByRoomId(id: number) {
    return new Promise((resolve) => {
      this.socket.emit(this.config.events.room.willGetById, {
        id: id,
        model: User
      });

      this.socket.on(this.config.events.room.didGetById, (room) => {
        let users = [];

        room.users.forEach((user) => {
          users.push(new User(user));
        });

        resolve(users);
      });
    });
  }

  kickUser(roomId: number, user: User) {
    this.socket.emit(this.userEvents.willKick, user);
    console.log('kicking', user, 'from', roomId);
  }
}
