import { Injectable } from '@angular/core';
let io = require('socket.io-client');
const config = require('../../config/config.json');

import { SocketRoom } from './lib/socket.room';
import { SocketUser } from './lib/socket.user';

@Injectable()
export class SocketService {
  socket: any;
  constructor() {
    let socket = io(config.socketServer);

    // Initialize listeners
    socket.room = new SocketRoom(socket);
    socket.user = new SocketUser(socket);

    socket.on('connect', function() {
      console.log('connect');
    });

    // Save our socket for later
    this.socket = socket;
  }
  getSocket() {
    return this.socket;
  }
}
