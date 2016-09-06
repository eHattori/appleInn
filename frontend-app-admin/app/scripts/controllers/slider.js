'use strict';

function sliderCtrl($scope) {

  $scope.vertical = {
    orientation: 'vertical'
  };

  $scope.sliderOpt1 = {
    value: 20
  };
  $scope.sliderOpt2 = {
    values: [75, 300],
    range: true,
    min: 0,
    max: 500
  };
  $scope.sliderOpt3 = {
    value: 80,
    range: 'min'
  };

  $scope.sliderOpt4 = {};
  angular.extend($scope.sliderOpt4, $scope.sliderOpt1, $scope.vertical);

  $scope.sliderOpt5 = {};
  angular.extend($scope.sliderOpt5, $scope.sliderOpt3, $scope.vertical);

  $scope.sliderOpt6 = {};
  angular.extend($scope.sliderOpt6, $scope.sliderOpt2, $scope.vertical);

  $scope.sliderOpt7 = {
    value: 30,
    range: 'min'
  };
  $scope.sliderOpt8 = {
    value: 40,
    range: 'min'
  };
  $scope.sliderOpt9 = {
    value: 50,
    range: 'min'
  };
  $scope.sliderOpt10 = {
    value: 60,
    range: 'min'
  };
  $scope.sliderOpt11 = {
    value: 70,
    range: 'min'
  };

  $scope.sliderOpt12 = {};
  angular.extend($scope.sliderOpt12, $scope.sliderOpt1, $scope.vertical);

  $scope.sliderOpt13 = {};
  angular.extend($scope.sliderOpt13, $scope.sliderOpt7, $scope.vertical);

  $scope.sliderOpt14 = {};
  angular.extend($scope.sliderOpt14, $scope.sliderOpt8, $scope.vertical);

  $scope.sliderOpt15 = {};
  angular.extend($scope.sliderOpt15, $scope.sliderOpt9, $scope.vertical);

  $scope.sliderOpt16 = {};
  angular.extend($scope.sliderOpt16, $scope.sliderOpt10, $scope.vertical);

  $scope.sliderOpt17 = {};
  angular.extend($scope.sliderOpt17, $scope.sliderOpt11, $scope.vertical);
}

angular
  .module('urbanApp')
  .controller('sliderCtrl', ['$scope', sliderCtrl]);
