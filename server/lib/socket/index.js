module.exports = class Socket {
  constructor(config, io) {
    this.config = config;
    this.io = io;
    this.initializeEvents();
  }
  initializeEvents() {
    let socketEvents = this.config.events.socket;
    this.io.on(socketEvents.start, (socket) => {
      console.log('user connected');
      let Room = require('../room');
      new Room(this.config, socket);
    });

    this.io.on(socketEvents.end, function () {
      console.log('User Disconnected');
    });
  }
};
