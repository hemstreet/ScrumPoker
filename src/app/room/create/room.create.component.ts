import { Component } from '@angular/core';
import { RoomCreateViewModel } from './room.create.viewmodel';
import { SocketService } from '../../socket';
import { config } from '../../config';
import { UserService } from '../../user';

@Component({
  selector: 'createRoom',
  templateUrl: './room.create.component.html',
  styleUrls: ['./room.create.component.scss']
})

export class CreateRoomComponent {
  model: RoomCreateViewModel;
  config: any;
  roomEvents: any;
  socket: SocketService;
  constructor(
    private socketService: SocketService,
    private userService: UserService
  ) {
    this.config = config.config;
    this.model = new RoomCreateViewModel();
    this.roomEvents = this.config.events.room;
    this.socket = this.socketService.get();
    this.initializeEvents();
  }

  initializeEvents() {
    this.socket.on(this.roomEvents.didCreate, (data) => {
      this.didCreate(data);
    });
  }

  submit() {

    this.socket.emit(this.roomEvents.willCreate, {
      user: this.model
    });
  }

  didCreate(data) {
    let user = this.userService.setUser(data.userName);
    console.log(this.roomEvents.didCreate, {
      data: data,
      user: user
    });
  }
}
