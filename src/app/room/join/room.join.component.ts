import { Component } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { RoomJoinViewModel } from './room.join.viewmodel';
import { TranslationService } from '../../translation';

// goToPage() { this.router.navigate(['/heroes']); }
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

    this.model.roomIdPlaceholder = this.translationService.get('common.usernameLabel');
    this.model.usernamePlaceholder = this.translationService.get('common.roomLabel');
  }

  submit(event) {
    console.log(this.model);
    event.preventDefault();
  }
  goToRoom(id: number, user: User) {
    // this.router.navigate(['/room', id], { queryParams: { name: user.name });
  }
}
