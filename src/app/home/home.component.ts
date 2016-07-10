import { Component, OnInit } from '@angular/core';
import { CreateRoomComponent, JoinRoomComponent } from '../room';
@Component({
  selector: 'home',
  directives: [
    CreateRoomComponent,
    JoinRoomComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
