import { Injectable } from '@angular/core';
import { Room, User } from '../model';
import { SocketService } from '../socket/Socket.service';
import { config } from '../config/config';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RoomService {
  config: any;
  roomEvents: any;
  room: Room;
  constructor(
    private socket: SocketService) {
    this.config = config.config;
    this.roomEvents = this.config.events.room;
  }

  isParticipant(id: number)  {
    return id === this.room.get('id');
  }

  joinById(id: number, user: User): Promise<Room> {

    return new Promise((resolve) => {
      if (this.room) {
        return this.room;
      }
      this.socket.emit(this.roomEvents.willJoinById, {
        id: id,
        user: user
      });

      this.socket.on(this.roomEvents.didJoinById, (roomData) => {
        let room = new Room(roomData);

        // Cache results
        this.room = room;
        resolve(room);
      });
    });
  }

  create(user: User): Observable<Room> {

    return Observable.create((observer) => {
      if (this.room) {
        observer.next(<Room>this.room);
        return;
      }

      this.socket.emit(this.config.events.room.willCreate, {
        user: user
      });

      this.socket.on(this.config.events.room.didDid, (room) => {
        this.room = room;
        observer.next(<Room>room);
      });
    });
  }

  getRooms(): Room[] {
    this.socket.emit(this.roomEvents.getRooms, {});

    // @TODO Make this logic come back from an observable from socketService
    let rooms = [new Room({
      id: 1
    })];
    return rooms;

  }
  getRoom(id: number): Room {
    this.socket.emit(this.roomEvents.getRoomById, {
      id: id
    });

    // @TODO make this logic come back from an observable from socketService
    let room = new Room({
      id: 1
    });
    return room;
  }
}
