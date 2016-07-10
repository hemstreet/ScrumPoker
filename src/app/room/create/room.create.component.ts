import { Component } from '@angular/core';
import { RoomCreateViewModel } from './room.create.viewmodel';
import { TranslationService } from '../../translation';

@Component({
  selector: 'createRoom',
  templateUrl: './room.create.component.html',
  styleUrls: ['./room.create.component.scss']
})

export class CreateRoomComponent {
  model: RoomCreateViewModel;
  constructor(
    private translationService: TranslationService) {
    this.model = new RoomCreateViewModel();
    this.model.usernamePlaceholder = this.translationService.get('common.usernameLabel');
  }

  submit(event) {
    console.log(this.model);
    event.preventDefault();
  }
}
