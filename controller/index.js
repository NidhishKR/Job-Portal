var signUpCtrlIndex = require('./signUpCtrl');
var loginCtrlIndex = require('./loginCtrl');
var loginAdminCtrlIndex = require('./loginAdminCtrl');
var jobUploadIndex = require('./jobUploadCtrl');
var newUpdateCtrlIndex = require('./newUpdateCtrl');
var homeCtrlIndex = require ('./homeCtrl');
var uploadCtrlIndex = require ('./uploadCtrl');
var controllerOutput = {
  signUpCtrlIndex: signUpCtrlIndex,
  loginCtrlIndex: loginCtrlIndex,
  loginAdminCtrlIndex : loginAdminCtrlIndex,
  jobUploadIndex : jobUploadIndex,
  newUpdateCtrlIndex : newUpdateCtrlIndex,
  homeCtrlIndex : homeCtrlIndex,
  uploadCtrlIndex : uploadCtrlIndex
}
module.exports = controllerOutput;
