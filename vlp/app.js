'use strict';

var SwaggerConnect = require('swagger-connect');
var app = require('connect')();
module.exports = app; // for testing
var connect    = require("./config/db");
var bodyParser = require('body-parser');
//var logger=require('./config/logger');
var config = {
  appRoot: __dirname // required config
};

SwaggerConnect.create(config, function(err, swaggerConnect) {
  if (err) { throw err; }

  // install middleware
  swaggerConnect.register(app);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(function(req, res, next){
  res.status(404);

  // respond with html page

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});
app.use(function (err,req,res,next) {
    logger.error(err.stack);
    res.status(500).send( {
    err: 'something blew up'
  });
})

  var port = process.env.PORT || 10010;
  app.listen(port);

});
