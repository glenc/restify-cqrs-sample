var db = require('../../../db');

module.exports = {
  name: '',
  model: 'user',
  execute: function(view, parameters, callback) {
    db.User.find(parameters, callback);
  }
};
