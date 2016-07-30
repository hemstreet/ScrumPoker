var q = require('q');
var Base = require('../Base');
module.exports = class User extends Base {
  constructor(config, socket) {
    super();
    this.config = config;
    this.socket = socket;
    this.initializeListeners('user');
  }

  willGetById(data) {
    var deferred = q.defer();
    let users = [];
    users.push(new data.Model({
      name: "Test user"
    }),
      new data.Model({
        name: "Test user 2"
      }),
      new data.Model({
        name: "Test user 3"
      }));

    console.log('Stubbed method willGetById');
    //  do logic, return deferred
    deferred.resolve(users);
    return deferred.promise;
  }

  willJoinById(data) {
    var deferred = q.defer();
    console.log('Stubbed method willJoinById');
    //  do logic, return deferred
    deferred.resolve(data);
    return deferred.promise;
  }

  willVote(data) {
    var deferred = q.defer();
    console.log('Stubbed method willVote');
    //  do logic, return deferred
    deferred.resolve(data);
    return deferred.promise;
  }

  willKick(data) {
    var deferred = q.defer();
    console.log('Stubbed method willKick');
    //  do logic, return deferred
    deferred.resolve(data);
    return deferred.promise;
  }
};
