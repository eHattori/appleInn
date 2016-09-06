'use strict';

function maskCtrl($scope) {
  $scope.maskOpt = {
    autoclear: false
  };
}

angular
  .module('urbanApp')
  .controller('maskCtrl', ['$scope', maskCtrl]);
