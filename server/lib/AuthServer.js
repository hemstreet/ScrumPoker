var argv = require('yargs').argv;
var express = require('express');

module.exports = class AuthServer {
  constructor() {
    this.app = express();
    this.initializeRoutes();
    this.go();
  }
  initializeRoutes() {
    this.app.get('/auth', function(req, res){
      var response = { a: 1 };
      res.json(response);
    });

    this.app.post('/auth/:strategy', function(req, res){
      app.post('/login', passport.authenticate(req.params.strategy, { successRedirect: '/',
        failureRedirect: '/login' }));
    });
  }
  go() {
    this.app.listen(argv.webPort || 3000);
  }
}
