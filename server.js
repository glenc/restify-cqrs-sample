var mongoose  = require('mongoose');
var restify   = require('restify');
var cqrs      = require('restify-cqrs');

var config = require('./config');

var server = restify.createServer({
  name: 'sample-api',
  version: '1.0.0'
});

// plugins
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.gzipResponse());

// connect to db
mongoose.connect(config.db.connection);

// initialize cqrs
cqrs.init(server, config.cqrs, function(err) {
  if (err) { console.log(err); return;}
  server.listen(config.web.port, function start() {
    console.log('%s listening at %s', server.name, server.url);
  });
});
