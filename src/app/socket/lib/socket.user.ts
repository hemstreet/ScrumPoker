export class SocketUser {
  socket: any;
  config: any;
  constructor(socket: any, config: any) {
    this.socket = socket;
    this.config = config;
    this.initializeListeners();
  }
  initializeListeners() {
    console.log('initialize socket user');
  }
}
