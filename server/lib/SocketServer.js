var argv = require('yargs').argv;
var config = require('../../config/config');

module.exports = class SocketServer {
  constructor() {
    this.server = require('http').createServer();
    this.io = require('socket.io')(this.server);
    this.initializeEvents();
    this.go();
  }
  initializeEvents() {
      var Socket = require('./socket');
      new Socket(config, this.io);
  }
  go() {
    this.server.listen(argv.socketPort || 3031);
  }
}
