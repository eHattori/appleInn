'use strict';

function wizardCtrl($scope) {
  $scope.validationOpt = {
    rules: {
      emailfield: {
        required: true,
        email: true,
        minlength: 3
      },
      namefield: {
        required: true,
        minlength: 3
      },
      passwordfield: {
        required: true,
        minlength: 6
      },
      cpasswordfield: {
        required: true,
        minlength: 6,
        equalTo: '#passwordfield'
      },
      description: {
        required: true
      },
      number: {
        required: true
      },
      name: {
        required: true
      },
      expiry: {
        required: true
      },
      cvc: {
        required: true
      }
    }
  };

  $scope.wizardOpt = {
    tabClass: '',
    'nextSelector': '.button-next',
    'previousSelector': '.button-previous',
    'firstSelector': '.button-first',
    'lastSelector': '.button-last',
    onNext: function () {
      var $valid = angular.element('#commentForm').valid(),
        $validator;
      if (!$valid) {
        $validator.focusInvalid();
        return false;
      }
    },
    onTabClick: function () {
      return false;
    }
  };
}

angular
  .module('urbanApp')
  .controller('wizardCtrl', ['$scope', wizardCtrl]);
