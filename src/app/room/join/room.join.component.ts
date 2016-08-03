import { Component } from '@angular/core';
import { RoomJoinViewModel } from './room.join.viewmodel';
import { config } from '../../config';
import { Router } from '@angular/router';
import { SocketService } from '../../socket';
import { UserService} from '../../user';

@Component({
  selector: 'joinRoom',
  templateUrl: './room.join.component.html',
  styleUrls: ['./room.join.component.scss']
})

export class JoinRoomComponent {
  model: RoomJoinViewModel;
  config: any;
  constructor(
    private router: Router,
    private socketService: SocketService,
    private userService: UserService) {
    this.config = config.config;
    this.model = new RoomJoinViewModel();
  }

  submit() {
    this.userService.setUser(this.model.username).subscribe(
      (user) => {
        this.socketService.emit(this.config.events.room.willJoinById, {
          id: this.model.roomId,
          user: user
        });
        this.router.navigate(['/room', this.model.roomId]);
      }
    );

  }
}
