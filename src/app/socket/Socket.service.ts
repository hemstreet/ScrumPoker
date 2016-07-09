import { Injectable } from '@angular/core';
let io = require('socket.io-client');
import { config } from '../shared/config';

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
  getSocket() {
    return this.socket;
  }
}
