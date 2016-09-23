


var job=angular.module('jobportal', ['ngRoute']);

job.config(function($routeProvider) {
$routeProvider
.when("/", {
        templateUrl : "../view/1stpage.html"
})

.when("/login", {
        templateUrl : "../view/login.html",
        controller :"loginCtrl"
})

.when("/signUp", {
        templateUrl : "../view/signUp.html",
        controller :"signUpCtrl"
})

.when("/admin", {
        templateUrl : "../view/admin.html",
        controller :"adminCtrl1"
})
});






job.controller ("loginCtrl", function($scope, $http){
  $scope.verification=function(login){


     $http.post('/login', $scope.login)
     .success(function(response)
                         {

                                $scope.user=response;

                                var i=0;
                                for (i = 0; i < $scope.user.length; i++) {
                                if ($scope.user[i].email==login.email && $scope.user[i].password==login.password)
                                {
                                      console.log("validate");
                                      return;
                                }
                                else {
                                  $scope.msg="incurect entry"

                                }
                              }
                        });
  }
});







job.controller ("signUpCtrl", function($scope, $http){
  $scope.signUpFunction=function(signUp){

    if (signUp.password==signUp.password1) {
       $scope.sign="signUp1";

       $http.post('/signUp', $scope.signUp)
       .success(function(response)
                           {
                                  console.log(response);


                          });

    }
    else {
      $scope.sign="signUp";
      $scope.msg="Password mismatch"
    }
  }
});








job.controller ("adminCtrl1", function($scope, $http){
  $scope.signUp1Function=function(signUp){

  }
});
