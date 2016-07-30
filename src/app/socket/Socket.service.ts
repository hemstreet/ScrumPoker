import { Injectable } from '@angular/core';
let io = require('socket.io-client');
import { config } from '../config/config';

import { SocketRoom } from './lib/socket.room';
import { SocketUser } from './lib/socket.user';

@Injectable()
export class SocketService {
  socket: any;
  config: any;
  constructor() {

    // @TODO fix this, Not sure why it comes double wraped
    this.config = config.config;

    let socket = io(this.config.socketServer);

    // Initialize listeners
    socket.room = new SocketRoom(socket, this.config);
    socket.user = new SocketUser(socket, this.config);

    socket.on('connect', function() {
      // Listen fo connect event
    });

    // Save our socket for later
    this.socket = socket;
  }

  get(): SocketService {
    return this.socket;
  }
  emit(name: string, data: any) {
    if (this.config.debug) {
      console.log(name, data);
    }

    this.socket.emit(name, data);
  }
  on(name: string, callback: any) {
    if (this.config.debug) {
      console.log('On', name);
    }
    this.socket.on(name, callback);
  }
}
