var server = require('http').createServer();
var argv = require('yargs').argv;
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('User Connected');
  socket.on('event', function(data){
    console.log(data);
  });
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
});
server.listen(argv.port || 3000);
