'use strict';

function NotificationsCtrl($scope) {

  var i = -1;
  var msgs = ['Your request has succeded!',
            'Are you the six fingered man?',
            'Inconceivable!',
            'I do not think that means what you think it means.',
            'Have fun storming the castle!'
        ];

  var $layout = 'topRight';

  $scope.getMessage = function () {

    i++;
    if (i === msgs.length) {
      i = 0;
    }

    return msgs[i];
  };

  $scope.selectLocation = function (pos, $event) {

    $layout = pos;

    angular.element('.location-selector').find('li').removeClass('active');

    angular.element($event.currentTarget).addClass('active');
  };

  $scope.showNoty = function () {

    var msg = angular.element('#message').val(),
      type = angular.element('#messenger-type').val().toLowerCase();

    if (!msg) {
      msg = $scope.getMessage();
    }

    if (!type) {
      type = 'error';
    }

    noty({
      theme: 'urban-noty',
      text: msg,
      type: type,
      timeout: 3000,
      layout: $layout,
      closeWith: ['button', 'click'],
      animation: {
        open: 'in',
        close: 'out',
        easing: 'swing'
      },
    });
  };
}

angular
  .module('urbanApp')
  .controller('NotificationsCtrl', ['$scope', NotificationsCtrl]);
