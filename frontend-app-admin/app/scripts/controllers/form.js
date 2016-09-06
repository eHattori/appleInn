'use strict';

function advancedFormCtrl($scope) {

  $scope.bears = [
    {
      'id': 1,
      'name': 'American Black Bear',
        },
    {
      'id': 2,
      'name': 'Asiatic Black Bear',
        },
    {
      'id': 3,
      'name': 'Brown Bear',
        },
    {
      'id': 4,
      'name': 'Giant Panda',
        },
    {
      'id': 5,
      'name': 'Sloth Bear',
        },
    {
      'id': 6,
      'name': 'Sun Bear',
        },
    {
      'id': 7,
      'name': 'Polar Bear',
        },
    {
      'id': 8,
      'name': 'Spectacled Bear',
        }
        ];

  $scope.clockOpt = {
    donetext: 'Done'
  };
  $scope.colorpickerOpt = {
    horizontal: true
  };
}

angular
  .module('urbanApp')
  .controller('advancedFormCtrl', ['$scope', advancedFormCtrl]);
