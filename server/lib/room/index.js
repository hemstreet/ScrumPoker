var q = require('q');
var Base = require('../Base');
module.exports = class Room extends Base {
  constructor(config, socket) {
    super();
    this.config = config;
    this.socket = socket;
    this.initializeListeners('room');
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

  willGetById(data) {
    var deferred = q.defer();

    let room = [];
    room.id = data.id;
    room.users = [
      {
        name: "Test user"
      },
      {
        name: "Test user 2"
      },
      {
        name: "Test user 3"
      }
    ];
    console.log('Stubbed method ROOM:willGetById');
    //  do logic, return deferred
    deferred.resolve(room);
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
