import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from './';
// import { User } from '../shared/models/user.model';

@Component({
  selector: 'room',
  providers: [
    // RoomService
  ],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  constructor(
    private router: Router,
    private roomService: RoomService) {

    console.log('inside room', this.id);

    // let user = new User();
    // let id = 1; // Get room number from the url

    // this.roomService.join(<number>id, <User>user);
  }

  ngOnInit() {
    console.log('room on init');
    this.sub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        this.id = <number>+params['id'];
      });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
