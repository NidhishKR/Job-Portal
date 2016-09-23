var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var md5 = require("md5");
var job = mongoose.model('register', {
  username: String,
  email: String,
  phone: Number,
  location: String,
  password: String,
  clgeName: String,
  jobType1: String,
  company1: String,
  jobType2: String,
  LocationPref: String,
  expiriance: Number
});

function signUp(req, res) {
  job.create({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
    password: md5(req.body.password),
    clgeName: req.body.clgeName,
    jobType1: req.body.jobType1,
    company1: req.body.company1,
    jobType2: req.body.jobType2,
    LocationPref: req.body.LocationPref,
    expiriance: req.body.expiriance
  }, function(err, data) {
    if (err) {
      res.json(err);
      return;
    }
    job.find(

      function(err, data) {
        if (err) {
          res.json(err)
        } else {
          res.json(data);
        }
      });
  });
};


function login(req, res) {

     console.log("Post request recieved");
     console.log("body", req.body);

       job.find(
         function(err, data) {
           console.log("data", data);
           if (err){
                      res.json(err)
                  }
                  else {
                    res.json(data);
                  }
        });

}

module.exports = {
  signUp: signUp
};
