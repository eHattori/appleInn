'use strict';

function galleryCtrl($scope) {
  $scope.ran = [];

  for (var i = 1; i <= 28; i += 1) {
    $scope.ran.push(i);
  }

  $scope.favourites = [{
    name: 'Animals'
    }, {
    name: 'Architecture'
    }, {
    name: 'Nature'
    }, {
    name: 'People'
    }, {
    name: 'Tech'
    }];

  $scope.filters = [{
    name: 'Black and White'
    }, {
    name: 'Colored'
    }, {
    name: 'Monotone'
    }, {
    name: 'Alpha Channel'
    }];

}

angular
  .module('urbanApp')
  .controller('galleryCtrl', ['$scope', galleryCtrl]);
