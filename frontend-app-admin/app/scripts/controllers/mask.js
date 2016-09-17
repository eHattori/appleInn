'use strict';

function maskCtrl($scope) {
  $scope.maskOpt = {
    autoclear: false
  };
}

angular
  .module('temQuartoApp')
  .controller('maskCtrl', ['$scope', maskCtrl]);
