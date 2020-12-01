const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const User = new Schema({
  username: { type: String},
  googleId: { type: String},
  email: { type: String},
  article: [{
    _id: {type: String},
    timestamp: { type: Date, default: Date.now}
  }]
});

module.exports = mongoose.model('User', User);