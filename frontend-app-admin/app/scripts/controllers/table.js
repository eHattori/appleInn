'use strict';

function tableCtrl($scope) {
  $scope.dataTableOpt = {
    'ajax': 'data/datatables-arrays.json'
  };
}

angular
  .module('temQuartoApp')
  .controller('tableCtrl', ['$scope', tableCtrl]);
