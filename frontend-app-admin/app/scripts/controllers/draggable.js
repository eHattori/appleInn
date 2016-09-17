'use strict';

function draggablePortletsCtrl($scope) {
  $scope.draggableOpt = {
    connectWith: '.draggable-portlets',
    handle: '.portlet-heading',
    start: function () {
      angular.element('.draggable-portlets-wrapper').addClass('dragging');
    },
    stop: function () {
      angular.element('.draggable-portlets-wrapper').removeClass('dragging');
    }
  };
}

angular
  .module('temQuartoApp')
  .controller('draggablePortletsCtrl', ['$scope', draggablePortletsCtrl]);
