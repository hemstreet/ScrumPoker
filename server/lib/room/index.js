var q = require('q');
module.exports = class Room {
  constructor(config, socket) {
    this.config = config;
    this.socket = socket;
    this.initializeEvents();
  }
  initializeEvents() {
    let roomEvents = this.config.events.room;

    Object.keys(roomEvents).forEach((key) => {
      let event = roomEvents[key];
      this.socket.on(event, (data) => {
        try {
          this[event.split(':')[1]](data).then((data) => {
            this.socket.emit(event.replace('will', 'did'), data);
          });
        } catch(err) {
          console.log(err, event);
        }
      });
    });
  }

  willCreate(data) {
    var deferred = q.defer();
    console.log('Stubbed method willCreate');
    //  do logic, return deferred
    deferred.resolve(data);
    return deferred.promise;
  }
  willJoin(data) {
    var deferred = q.defer();
    console.log('Stubbed method willJoin');
    //  do logic, return deferred
    deferred.resolve(data);
    return deferred.promise;
  }

  willGetRoomById(data) {
    var deferred = q.defer();
    console.log('Stubbed method willGetRoomById');
    //  do logic, return deferred
    deferred.resolve(data);
    return deferred.promise;
  }

  willGetRooms(data) {
    var deferred = q.defer();
    console.log('Stubbed method willGetRooms');
    //  do logic, return deferred
    deferred.resolve(data);
    return deferred.promise;
  }
};
