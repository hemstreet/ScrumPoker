export class SocketRoom {
  socket: any;
  config: any;
  constructor(socket: any, config: any) {
    this.socket = socket;
    this.config = config;
    this.initializeListeners();
  }
  initializeListeners() {
    // this.socket.on('')
  }
}
