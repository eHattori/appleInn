'use strict';

function editorCtrl($scope) {
  $scope.text = 'Hello World';

  $scope.opt1 = {
    toolbar: {
      fa: true
    }
  };
}

angular
  .module('temQuartoApp')
  .controller('editorCtrl', ['$scope', editorCtrl]);
