var argv = require('yargs').argv;

module.exports = class SocketServer {
  constructor() {
    this.server = require('http').createServer();
    this.io = require('socket.io')(this.server);
    this.initializeEvents();
    this.go();
  }
  initializeEvents() {
    this.io.on('connection', function(socket) {
      console.log('User Connected');
      socket.on('event', function (data) {
        console.log(data);
      });
      socket.on('disconnect', function () {
        console.log('User Disconnected');
      });
    }.bind(this));
  }
  go() {
    this.server.listen(argv.socketPort || 3031);
  }
}
