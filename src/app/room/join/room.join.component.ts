import { Component } from '@angular/core';
import { RoomJoinViewModel } from './room.join.viewmodel';
import { config } from '../../config';
import { Router } from '@angular/router';
import { SocketService } from '../../socket';

@Component({
  selector: 'joinRoom',
  templateUrl: './room.join.component.html',
  styleUrls: ['./room.join.component.scss']
})

export class JoinRoomComponent {
  model: RoomJoinViewModel;
  config: any;
  constructor(private router: Router, private socketService: SocketService) {
    this.config = config.config;
    this.model = new RoomJoinViewModel();
  }

  submit() {
    this.socketService.emit(this.config.events.room.willJoin, {
      id: this.model.roomId,
      model: this.model
    });
    this.router.navigate(['/room', this.model.roomId]);
  }
}
