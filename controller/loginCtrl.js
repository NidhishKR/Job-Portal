var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var md5 = require("md5");
var model = require('../model/signUpModel')

function login(req, res) {
  model.signUpModel(req, res);
}
module.exports = {
  login: login
};
