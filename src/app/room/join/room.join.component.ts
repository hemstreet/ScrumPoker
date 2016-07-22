import { Component } from '@angular/core';
import { RoomJoinViewModel } from './room.join.viewmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'joinRoom',
  templateUrl: './room.join.component.html',
  styleUrls: ['./room.join.component.scss']
})

export class JoinRoomComponent {
  model: RoomJoinViewModel;
  constructor(private router: Router) {
    this.model = new RoomJoinViewModel();
  }

  submit() {
    this.router.navigate(['/room', this.model.roomId]);
  }
}
