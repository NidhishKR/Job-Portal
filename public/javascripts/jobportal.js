var job = angular.module('jobportal', ['ngRoute', 'ui.bootstrap']);
job.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../view/home.html",
      controller: "homeCtrl"
    })
    .when("/login", {
      templateUrl: "../view/login.html",
      controller: "loginCtrl"
    })
    .when("/signUp", {
      templateUrl: "../view/signUp.html",
      controller: "signUpCtrl"
    })
    .when("/admin", {
      templateUrl: "../view/admin.html",
      controller: "adminCtrl1"
    })
    .when("/jobUpload", {
      templateUrl: "../view/jobUpload.html",
      controller: "jobUploadCtrl1"
    })
    .when("/newUpdate", {
      templateUrl: "../view/newUpdate.html",
      controller: "newUpdateCtrl"
    })
    .when("/searchResult", {
      templateUrl: "../view/searchResult.html",
      controller: "searchResultCtrl"
    })
    .when("/resume", {
      templateUrl: "../view/resume.html"
    })
    .when("/upload", {
      templateUrl: "../view/fileUpload.html",
      controller: "fileUploadtCtrl"
    })
    .when("/debug", {
      templateUrl: "../view/searchResult.html",
      controller: "searchResultCtrl"
    })
    .when("/view myReume", {
      templateUrl: "../view/searchResult.html",
      controller: "searchResultCtrl"
    });

});
job.controller("loginCtrl", function($scope, $http) {
  $scope.verification = function(login) {
    $http.post('/login', $scope.login)
      .success(function(response) {
        $scope.user = response;
        var i = 0;

          if ($scope.user.email == login.email) {
            console.log("validate");
            return;
          } else {
            $scope.msg = "incorrect entry"
          }

      });
  }
});
job.controller("signUpCtrl", function($scope, $http) {
  $scope.signUpFunction = function(signUp) {
    if (signUp.password === signUp.password1 && signUp.username != '' && signUp.email != '' &&
      signUp.email != undefined && signUp.dob != '') {
      $scope.sign = "signUp1";
      $http.post('/signUp', $scope.signUp)
        .then(function(response) {
          alert();
          console.log(response);
        }, function(err) {});
    } else if (signUp.password != signUp.password1) {
      $scope.sign = "signUp";
      $scope.msg = "password mismatch"
    } else {
      $scope.sign = "signUp";
      $scope.msg = "Enter all feild currectely for signUp"
    }
  }
});
job.controller("adminCtrl1", function($scope, $http) {
  $scope.jobUpload = "/#";
  $scope.loginAdminFunction = function(loginAdmin) {
    $http.post('/admin', $scope.loginAdmin)
      .then(function(response) {
        alert("corret user");
        if (response.data === 'OK') {
          $scope.jobUpload = 'jobUpload';
        }
      });
  }
});
job.controller("jobUploadCtrl1", function($scope, $http) {
  $scope.jobUploadFunction = function(jobUpload) {
    $http.post('/jobUpload', $scope.jobUpload)
      .then(function(response) {
        //console.log(response.data);
      });
  }
});
job.filter('startfrom', function() {
 return function(data, start) {
   if (!data || !data.length) { return; }

   return data.slice(start);
 }

});
job.controller("newUpdateCtrl", function($scope, $http) {
  $http.get('/newUpdate')
    .then(function(response) {
      $scope.job = response.data;
    });

  $scope.maxSize = 15;
  $scope.currentPage = 1;
  $scope.numPerPage =5;
});
job.controller("homeCtrl", function($scope, $http) {
  $scope.searchFunction = function(search) {
    $http.post('/', $scope.search)
      .then(function(response) {
        $scope.job = response.data;
        localStorage.setItem("job", JSON.stringify([$scope.job]));
        //localStorage.job= response.data;
        //  console.log(localStorage.job);
        //console.log(localStorage.job);
      });
  }
});
job.controller("searchResultCtrl", function($scope) {
  $scope.job = JSON.parse(localStorage.getItem("job"));
});



job.directive('fileModel', ['$parse', function ($parse) {
   return {
      restrict: 'A',
      link: function(scope, element, attrs) {
         var model = $parse(attrs.fileModel);
         var modelSetter = model.assign;

         element.bind('change', function(){
            scope.$apply(function(){
               modelSetter(scope, element[0].files[0]);
            });
         });
      }
   };
}]);

job.service('fileUpload', ['$http', function ($http) {
   this.uploadFileToUrl = function(file, uploadUrl){
      var fd = new FormData();
      fd.append('file', file);
      $http.post(uploadUrl, fd)
      .then(function(response){alert("response recived");
        console.log(response.data);
      })

      .then(function(){alert();
      });
   }
}]);

job.controller('fileUploadtCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
   $scope.uploadFile = function(){
      var file = $scope.myFile;


      var uploadUrl = '/upload';
      fileUpload.uploadFileToUrl(file, uploadUrl);
   };
}]);
