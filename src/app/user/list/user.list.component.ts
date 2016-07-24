import { Component, OnInit } from '@angular/core';
import { User } from '../../model';
import { UserService } from '../user.service';

@Component({
  selector: 'userList',
  templateUrl: './user.list.component.html',
  styleUrls: ['./user.list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) {
  }
  userClicked(user: User) {
    this.userService.kickUser(1, user);
  }
  ngOnInit() {
    this.users = this.userService.getUserList();
  }
}
