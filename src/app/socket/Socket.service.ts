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
      // Run connection logic
    });

    // Save our socket for later
    this.socket = socket;
  }
  emit(name: string, data: any) {
    this.socket.emit(name, data);
  }
  on(name: string, callback: any) {
    this.socket.on(name, callback);
  }

}
