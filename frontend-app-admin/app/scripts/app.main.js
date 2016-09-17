'use strict';

angular
  .module('temQuartoApp')
  .controller('AppCtrl', ['$scope', '$http', '$localStorage','$location','$auth','$state','$window',
        function AppCtrl($scope, $http, $localStorage,$location,$auth, $state,$window) {

      $scope.mobileView = 767;

      $scope.app = {
        name: 'Tem Quarto',
        author: 'Eurek ideias',
        version: '1.0.0',
        year: (new Date()).getFullYear(),
        layout: {
          isSmallSidebar: false,
          isChatOpen: false,
          isFixedHeader: true,
          isFixedFooter: false,
          isBoxed: false,
          isStaticSidebar: false,
          isRightSidebar: false,
          isOffscreenOpen: false,
          isConversationOpen: false,
          isQuickLaunch: false,
          sidebarTheme: '',
          headerTheme: ''
        },
        isMessageOpen: false,
        isConfigOpen: false
      };

      if(!$window.localStorage.user || $window.localStorage.user === null || $window.localStorage.user === "null")
        $state.go('user.signin');
      else {

        var user = JSON.parse($window.localStorage.user);
        $scope.user = {
          fname  : user.first_name,
          lname  : user.last_name,
          jobDesc: user.email,
          avatar : user.avatar,
        };
      }



      if (angular.isDefined($localStorage.layout)) {
        $scope.app.layout = $localStorage.layout;
      } else {
        $localStorage.layout = $scope.app.layout;
      }

      $scope.$watch('app.layout', function () {

        $localStorage.layout = $scope.app.layout;
          $location.path("#/singin");
      }, true);

      $scope.getRandomArbitrary = function () {
        return Math.round(Math.random() * 100);
      };

    }
]);
