var signUpModelIndex = require('./signUpModel');
var loginModelIndex = require('./loginModel');
var loginAdminModelIndex = require('./loginAdminModel');
var jobUploadModelIndex = require('./jobUploadModel');
var newUpdateModelIndex = require('./newUpdateModel');
var homeModelIndex = require('./homeModel');
var uploadModelIndex = require('./uploadModel');
modelOutput = {
  signUpModelIndex: signUpModelIndex,
  loginModelIndex: loginModelIndex,
  loginAdminModelIndex: loginAdminModelIndex,
  jobUploadModelIndex : jobUploadModelIndex,
  newUpdateModelIndex : newUpdateModelIndex,
  homeModelIndex : homeModelIndex,
  uploadModelIndex : uploadModelIndex
}
module.exports = modelOutput;
