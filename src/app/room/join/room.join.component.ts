import { Component } from '@angular/core';
import { User } from '../../shared/models';
import { RoomJoinViewModel } from './room.join.viewmodel';
import { TranslationService } from '../../translation';

@Component({
  selector: 'joinRoom',
  templateUrl: './room.join.component.html',
  styleUrls: ['./room.join.component.scss']
})

export class JoinRoomComponent {
  model: RoomJoinViewModel;
  constructor(
    private translationService: TranslationService) {
    this.model = new RoomJoinViewModel();

    this.model.usernamePlaceholder = this.translationService.get('common.usernameLabel');
    this.model.roomIdPlaceholder = this.translationService.get('common.roomLabel');
  }

  submit() {
    // console.log(this.model);

    this.goToRoom(this.model.roomId);
    return false;
  }
  goToRoom(id: number) {
    // this.router.navigate(['/room', id], { queryParams: { name: user.name });
  }
}
