var db = require('../../../db');

module.exports = {
  name: 'new-user',
  handler: function(payload, callback) {
    var user = {
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      updatedAt: new Date(),
      createdAt: new Date()
    };

    db.User.create(user, function(err, doc) {
      if (err) return callback(err);
      var msg = {
        user_id: doc.id,
        message: 'User created successfully'
      };
      return callback(null, msg);
    });
  }
};
