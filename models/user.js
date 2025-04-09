const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  googleId: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('User', UserSchema);
