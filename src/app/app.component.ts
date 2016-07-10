import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SocketService } from './socket';
import { TranslationService } from './translation';

import { AppViewModel } from './app.component.viewmodel';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'appComponent',
  providers: [
    SocketService,
    TranslationService
  ],
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  model: AppViewModel;
  constructor(
    private socketService: SocketService,
    private translationService: TranslationService) {
  };

  ngOnInit() {
    this.model = new AppViewModel();
    this.model.title = this.translationService.get('common.title');
  }
}
