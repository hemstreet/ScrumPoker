import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from './room.service';
import {VoteComponent} from '../vote/vote.component';
import { UserListComponent } from '../user';
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService,
    private socketService: SocketService) {

    this.config = config.config;
    this.id = +this.route.snapshot.params['id'];
    this.socket = this.socketService.get();
  }

  ngOnInit() {
  }
}
