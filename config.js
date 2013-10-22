var config = {};

config.db = {
  connection: 'mongodb://localhost/restify-cqrs-sample'
};

config.web = {
  port: 9000
};

config.cqrs = {
  searchPaths: {
    commandHandlers: 'domain/**/command-handlers/**/*.js',
    queries: 'domain/**/queries/**/*.js',
    views: 'domain/**/views/**/*.js'
  },

  commandStore: require('restify-cqrs-mongodb').CommandStore(config.db.connection)
};

module.exports = config;
