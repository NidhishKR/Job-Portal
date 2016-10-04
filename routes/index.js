var express = require('express');
var router = express.Router();
var signUpCtrl = require('../controller');
var loginCtrl = require('../controller');
var loginAdminCtrl = require('../controller');
var jobUploadCtrl = require('../controller');
var newUpdateCtrl = require('../controller');
var homeCtrl = require('../controller');
var uploadCtrl = require('../controller');
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express'
  });
});
router.post('/signUp', signUpCtrl.signUpCtrlIndex);
router.post('/login', loginCtrl.loginCtrlIndex);
router.post('/admin', loginAdminCtrl.loginAdminCtrlIndex);
router.post('/jobUpload', jobUploadCtrl.jobUploadIndex);
router.get('/newUpdate', newUpdateCtrl.newUpdateCtrlIndex);
router.post('/', homeCtrl.homeCtrlIndex);
//router.post('/upload', uploadCtrl.uploadCtrlIndex);
module.exports = router;
