var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Q = require('q');

module.exports = class LocalAuth {
  localAuth(username, password) {
    var deferred = Q.defer();

    passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
          if (err) { return done(err); }
          if (!user) {
            deferred.reject({
              error: true,
              message: 'Incorrect username.'
            });
          }
          if (!user.validPassword(password)) {
            deferred.reject({
              error: true,
              message: 'Incorrect password.'
            });
          }
          deferred.resolve(user);
        });
      }
    ));

    return deferred.promise();
  }
}
