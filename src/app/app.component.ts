import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService } from './shared';
import { SocketService } from './socket';
import { TranslationService } from './translations';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'appComponent',
  providers: [ApiService, SocketService, TranslationService],
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private api: ApiService,
    private socket: SocketService,
    private translation: TranslationService) {
    console.log(this.socket.getSocket());
    console.log(this.translation);
  };
}
