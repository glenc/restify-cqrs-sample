var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var userSchema = new Schema({
  email       :  { type: String, required: true, unique: true },
  firstName   :  String,
  lastName    :  String,
  updatedAt   :  { type: Date, required: true },
  createdAt   :  { type: Date, required: true }
});

var User = mongoose.model('User', userSchema);
module.exports.User = User;
