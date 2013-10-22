var db = require('../../../db');

module.exports = {
  name: '',
  model: 'user',
  execute: function(view, parameters, callback) {
    db.User.find(parameters, view.select, function(err, results) {
      if (err) return callback(err);
      var mapped = results.map(view.map);
      callback(null, mapped);
    });
  }
};
