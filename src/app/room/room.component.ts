import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from './room.service';
import {VoteComponent} from '../vote/vote.component';
import { UserListComponent } from '../user';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [
    RoomService
  ],
  directives: [
    VoteComponent,
    UserListComponent
  ]
})

export class RoomComponent {
  id: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService) {

    this.id = +this.route.snapshot.params['id'];

    // let user = new User();
    // this.roomService.join(<number>id, <User>user);
  }
}
