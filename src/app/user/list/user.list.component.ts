import { Component, OnInit } from '@angular/core';
import { User } from '../../model';
import { UserService } from '../user.service';
import { SocketService } from '../../socket';
import { config } from '../../config';

@Component({
  selector: 'userList',
  templateUrl: './user.list.component.html',
  styleUrls: ['./user.list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  socket: SocketService;
  config: any;
  constructor(
    private userService: UserService,
    private socketService: SocketService) {
    this.config = config.config;
    this.socket = socketService.get();
  }
  userClicked(user: User) {
    this.userService.kickUser(1, user);
  }
  ngOnInit() {
    this.userService.getUserListByRoomId(3).then((data) => {
      console.log('getUserListById promise', 3, data);
    });
  }
}
