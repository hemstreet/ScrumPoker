// Setup auth server
var AuthServer = require('./lib/AuthServer');
new AuthServer();

// Setup socket server
var SocketServer = require('./lib/SocketServer');
new SocketServer();
