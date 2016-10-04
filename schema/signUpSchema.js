var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var candidates = new Schema({

  username: {
    type: String,
    Default: null,
    require: true
  },

  email: {
    type: String,
    Default: null,
    require: true
  },

  phone: {
    type: Number,
    Default: null,
    require: true
  },

  password: {
    type: String,
    Default: null,
    require: true
  },

  dob: {
    type: Date,
    Default: null,
    require: true
  },

  status: {
    type: String,
    Default: null,
    require: true
  },

  error: {
    type: String,
    default: null,
    require: true
  },

  date: { type: Date, default: Date.now }
});

module.exports = {candidates : candidates};
