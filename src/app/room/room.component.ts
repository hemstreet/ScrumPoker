import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from './room.service';
// import { User } from '../shared/models/user.model';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [
    RoomService
  ]
})

export class RoomComponent {
  id: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService) {

    this.id = +this.route.snapshot.params['id'];
    console.log(this.roomService.getRoom(this.id));

    // let user = new User();
    // this.roomService.join(<number>id, <User>user);
  }
}
