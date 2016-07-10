import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';

@Component({
  selector: 'createRoom',
  templateUrl: './room.create.component.html',
  styleUrls: ['./room.create.component.scss']
})

export class CreateRoomComponent {
  createRoomForm: any;
  constructor(
    formBuilder: FormBuilder) {
    this.createRoomForm = formBuilder.group({
      username: ["", Validators.required]
    });
  }

  createRoom(event) {
    console.log(event, this.createRoomForm.value);
    event.preventDefault();
  }
}
