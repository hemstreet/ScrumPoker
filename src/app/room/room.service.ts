import { Room, User } from '../shared/models';
import { SocketService } from '../socket/Socket.service';
import { config } from '../shared/config/config';

export class RoomService {
  config: any;
  roomEvents: any;
  constructor(private socket: SocketService) {
    this.config = config.config;
    this.roomEvents = this.config.events.room;
    console.log(config.config);
  }
  userCanJoinRoom(): boolean {
    // Check to see if the user has access to join that teams room
    return true;
  }
  join(id: number, user: User) {

    if (!this.userCanJoinRoom()) () => {
      console.log('Can\'t join room');
      return;
    };
  }

  create(user: User): Room {
    let room = new Room();

    return room;
  }

  getRooms(): Room[] {
    this.socket.emit(this.roomEvents.getRooms, {});

    // @TODO Make this logic come back from an observable from socketService
    let rooms = [new Room()];
    return rooms;

  }
  getRoom(id: number): Room {
    this.socket.emit(this.roomEvents.getRoomById, {
      id: id
    });

    // @TODO make this logic come back from an observable from socketService
    let room = new Room();
    return room;
  }
}
