import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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
    return Observable.create((observer) => {
        this.socket.emit(this.config.events.room.willGetById, {
          id: id,
          model: User
        });

        this.socket.on(this.config.events.room.didGetById, (room) => {
          observer.next(room.users);
          observer.complete();
        });
    }).toPromise();
  }

  kickUser(roomId: number, user: User) {
    this.socket.emit(this.userEvents.willKick, user);
    console.log('kicking', user, 'from', roomId);
  }
}
