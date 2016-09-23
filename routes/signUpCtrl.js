var express = require('express');



var model = require('../model/signUpModel');



function signUp(req, res){
  model.SignUp(req);

}

module.exports = {signUp : signUp};
