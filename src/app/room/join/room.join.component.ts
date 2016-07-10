import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { User } from '../../shared/models/user.model';

// goToPage() { this.router.navigate(['/heroes']); }
@Component({
  selector: 'joinRoom',
  templateUrl: './room.join.component.html',
  styleUrls: ['./room.join.component.scss']
})

export class JoinRoomComponent {
  joinRoomForm: any;
  constructor(formBuilder: FormBuilder) {
    this.joinRoomForm = formBuilder.group({
      username: ["", Validators.required],
      room: ["", Validators.required]
    });
  }

  joinRoom(event) {
    console.log(this.joinRoomForm.value);
  }
  goToRoom(id: number, user: User) {
    // this.router.navigate(['/room', id], { queryParams: { name: user.name });
  }
}
