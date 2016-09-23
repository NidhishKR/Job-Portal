var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var md5 = require("md5");
var routes = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
mongoose.connect('mongodb://localhost/jobPortal1');
mongoose.connection.once('connected', function() {
  console.log("Connected to database");
});
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
app.post('/signUp', function(req, res) {
  console.log("Post request recieved");
  console.log("body", req.body);
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
});
app.post('/login', function(req, res) {
  console.log("Post request recieved");
  console.log("body", req.body);
  job.find(
    function(err, data) {
      if (err) {
        res.json(err)
      } else {
        res.json(data);
      }
    });
});
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
