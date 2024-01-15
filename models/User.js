// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Add other user-related fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
