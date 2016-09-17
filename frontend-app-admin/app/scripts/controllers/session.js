'use strict';

function sessionCtrl($scope, $state, $auth, $window, md5) {

  delete $window.localStorage.user;

  $scope.signin = function () {
    $state.go('user.signin');
  };

  $scope.authenticate = function(provider) {

    if(provider == 'login')
      $auth.login({ email : $scope.email , password :  md5.createHash($scope.password) } );
    else {
      $auth.authenticate(provider).then(function(response) {
        $window.localStorage.user = JSON.stringify(response.data);
        $scope.user = JSON.parse($window.localStorage.user);
        //$state.go('app.dashboard');
      })
          .catch(function(response) {
            console.log(response.data);
          });
    }
  };

  $scope.submit = function () {
    $state.go('app.dashboard');
  };
}

angular
  .module('temQuartoApp')
  .controller('sessionCtrl', ['$scope', '$state', '$auth','$window','md5', sessionCtrl]);
