import { Component } from '@angular/core';
import { RoomJoinViewModel } from './room.join.viewmodel';

@Component({
  selector: 'joinRoom',
  templateUrl: './room.join.component.html',
  styleUrls: ['./room.join.component.scss']
})

export class JoinRoomComponent {
  model: RoomJoinViewModel;
  constructor() {
    this.model = new RoomJoinViewModel();
  }

  submit() {
    // console.log(this.model);

    this.goToRoom(this.model.roomId);
    return false;
  }
  goToRoom(id: number) {
     // this.router.navigate(['/room', id]);
  }
}
