var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var md5 = require("md5");



var signUpCtrl = require('../controller/signUpCtrl');


router.post('/signUp', signUpCtrl.signUp);




module.exports = router;
