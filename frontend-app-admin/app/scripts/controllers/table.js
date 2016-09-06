'use strict';

function tableCtrl($scope) {
  $scope.dataTableOpt = {
    'ajax': 'data/datatables-arrays.json'
  };
}

angular
  .module('urbanApp')
  .controller('tableCtrl', ['$scope', tableCtrl]);
