import { Component } from '@angular/core';
import { RoomService } from './';
import { UserService } from '../user';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'room',
  providers: [
    RoomService,
    UserService
  ],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  constructor(
    private roomService: RoomService,
    private userService: UserService
  ) {

    let user = new User();
    let id = 1; // Get room number from the url

    this.roomService.join(<number>id, <User>user);
  }
}
