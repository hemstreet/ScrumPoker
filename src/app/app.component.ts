import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SocketService } from './socket';

import { AppViewModel } from './app.component.viewmodel';

import '../style/app.scss';

import { TranslationService } from './translation';
import { UserService } from './user';
import { VoteService } from './vote';

@Component({
  selector: 'appComponent',
  providers: [
    SocketService,
    TranslationService,
    UserService,
    VoteService
  ],
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  model: AppViewModel;
  constructor(
    private socketService: SocketService) {
    this.socketService; // Quiets unused param to constructor IDE check
  };

  ngOnInit() {
    this.model = new AppViewModel();
  }
}
