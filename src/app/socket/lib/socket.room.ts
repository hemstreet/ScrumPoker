export class SocketRoom {
  socket: any;
  constructor(socket: any) {
    this.socket = socket;
    this.initializeListeners();
  }
  initializeListeners() {
    console.log('initialize socket room');
  }
}
