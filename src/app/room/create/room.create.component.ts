import { Component } from '@angular/core';
import { RoomCreateViewModel } from './room.create.viewmodel';

@Component({
  selector: 'createRoom',
  templateUrl: './room.create.component.html',
  styleUrls: ['./room.create.component.scss']
})

export class CreateRoomComponent {
  model: RoomCreateViewModel;
  constructor() {
    this.model = new RoomCreateViewModel();
  }

  submit() {
    // console.log(this.model);

    return false;
  }
}
