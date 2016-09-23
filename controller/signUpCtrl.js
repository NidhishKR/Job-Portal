var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var md5 = require("md5");
var model = require('../model/signUpModel')

function signUp(req, res) {
  model.signUp(req, res);
}

function login(req, res) {
  model.login(req, res);
}

module.exports = {
  signUp: signUp
};
