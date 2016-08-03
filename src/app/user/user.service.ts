import { Injectable } from '@angular/core';
import { User } from '../model';
import { SocketService } from '../socket';
import { config } from '../config';
import { Observable } from 'rxjs/Rx';

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
  }

  // This will be modified later to accept users accounts from the server
  setUser(name: string): Observable<User> {
    return Observable.create((observer) => {
      let user = <User>new User({
        name: name
      });

      this.currentUser = user;
      observer.next(user);
    });
  }

  getUser() {
    return this.currentUser;
  }


  usersByRoom(id: number): Observable<User[]> {
    return Observable.create((observer) => {

      // observer.next(<User[]>users);

    });
  }

  getUserListByRoomId(id: number): Observable<User[]> {
    return Observable.create((observer) => {
      this.socket.emit(this.config.events.room.willGetById, {
        id: id
      });

      this.socket.on(this.config.events.room.didGetById, (room) => {
        let users = [];

        room.users.forEach((user) => {
          users.push(new User(user));
        });

        observer.next(<User[]>users);
        return users;
      });
    });
  }

  kickUser(roomId: number, user: User) {
    this.socket.emit(this.userEvents.willKick, user);
    console.log('kicking', user, 'from', roomId);
  }
}
