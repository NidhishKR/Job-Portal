var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
//var md5 = require("md5");
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


//  var job=mongoose.model('register',
//   { username : String, email : String, phone : Number, location: String, password : String, clgeName : String,
//    jobType1 : String, company1 : String, jobType2 : String, LocationPref : String, expiriance : Number});
//
//
//  router.post('/signUp', function(req, res)
//  {
//   console.log("Post request recieved");
//   console.log("body", req.body);
//
//    job.create({
//              username : req.body.username,
//              email : req.body.email,
//              phone : req.body.phone,
//              location : req.body.location,
//              password : md5(req.body.password),
//              clgeName : req.body.clgeName,
//              jobType1 : req.body.jobType1,
//              company1 : req.body.company1,
//              jobType2 : req.body.jobType2,
//              LocationPref : req.body.LocationPref,
//              expiriance : req.body.expiriance
//          },function(err, data)
//          {
//              if (err) {
//              res.json(err);
//              return;
//            }
//              job.find(
//
//                function(err, data) {
//                  if (err){
//                      res.json(err)
//                  }
//                  else {
//                    res.json(data);
//                  }
//
//              });
//          });
//
//
//
//  });
//
//
//
//
//
//
//
// router.post('/login', function(req, res)
// {
//    console.log("Post request recieved");
//    console.log("body", req.body);
//
//      job.find(
//        function(err, data) {
//          if (err){
//                     res.json(err)
//                 }
//                 else {
//                   res.json(data);
//                 }
//       });
//  });
//
//
//






module.exports = router;
