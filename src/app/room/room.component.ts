import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from './room.service';
import {VoteComponent} from '../vote/vote.component';
import { UserListComponent, UserService } from '../user';
import { Room, User } from '../model';
import { SocketService } from '../socket';
import { config } from '../config';

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

export class RoomComponent implements OnInit {
  id: number;
  config: any;
  socket: SocketService;
  room: Room;
  users: User[];
  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private socketService: SocketService,
    private router: Router,
    private userService: UserService
  ) {
    this.config = config.config;
    this.id = +this.route.snapshot.params['id'];
    this.socket = this.socketService.get();
  }

  ngOnInit() {

    if (!this.userService.getUser()) {
      console.log('Redirecting anonymous user from requireAuth Component');
      // User is not set, redirect home
      this.router.navigate(['/']);
    }

    this.userService.getUserListByRoomId(3).subscribe(
      (users) => this.users = users,
      (err) => console.log(err)
    );
  }
}
