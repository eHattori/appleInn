'use strict';

function sortableCtrl($scope) {
  $scope.sortableOpt = {
    placeholder: 'ui-state-highlight',
    connectWith: '.connectedSortable'
  };
}

angular
  .module('temQuartoApp')
  .controller('sortableCtrl', ['$scope', sortableCtrl]);
