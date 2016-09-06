'use strict';

function easyChartCtrl($scope) {
  $scope.percent1 = 86;
  $scope.options1 = {
    size: 180,
    lineWidth: 8,
    barColor: 'rgba(255,255,255,.7)',
    trackColor: 'rgba(0,0,0,.1)',
    lineCap: 'butt',
    easing: 'easeOutBounce',
    onStep: function (from, to, percent) {
      angular.element(this.el).find('.percent').text(Math.round(percent));
    }
  };

  $scope.percent2 = 52;
  $scope.options2 = {
    size: 180,
    lineWidth: 8,
    barColor: 'rgba(255,255,255,.7)',
    trackColor: 'rgba(0,0,0,.1)',
    lineCap: 'butt',
    easing: 'easeOutBounce',
    onStep: function (from, to, percent) {
      angular.element(this.el).find('.percent').text(Math.round(percent));
    }
  };

  $scope.percent3 = 76;
  $scope.options3 = {
    size: 180,
    lineWidth: 15,
    barColor: 'rgba(255,255,255,.7)',
    trackColor: false,
    lineCap: 'round',
    easing: 'easeOutBounce',
    onStep: function (from, to, percent) {
      angular.element(this.el).find('.percent').text(Math.round(percent));
    }
  };

  $scope.percent4 = 82;
  $scope.options4 = {
    size: 180,
    lineWidth: 15,
    barColor: 'rgba(255,255,255,.7)',
    trackColor: 'rgba(0,0,0,.1)',
    lineCap: 'butt',
    easing: 'easeOutBounce',
    onStep: function (from, to, percent) {
      angular.element(this.el).find('.percent').text(Math.round(percent));
    }
  };

  $scope.percent5 = 54;
  $scope.options5 = {
    size: 180,
    lineWidth: 8,
    barColor: 'rgba(255,255,255,.7)',
    trackColor: 'rgba(0,0,0,.1)',
    lineCap: 'round',
    easing: 'easeOutBounce',
    scaleColor: false,
    onStep: function (from, to, percent) {
      angular.element(this.el).find('.percent').text(Math.round(percent));
    }
  };

  $scope.percent6 = 43;
  $scope.options6 = {
    size: 180,
    lineWidth: 2,
    barColor: 'rgba(255,255,255,.7)',
    trackColor: 'rgba(0,0,0,.1)',
    lineCap: 'round',
    easing: 'easeOutBounce',
    scaleColor: false,
    onStep: function (from, to, percent) {
      angular.element(this.el).find('.percent').text(Math.round(percent));
    }
  };

  $scope.percent7 = 43;
  $scope.options7 = {
    size: 180,
    lineWidth: 14,
    barColor: 'rgba(255,255,255,.7)',
    trackColor: 'rgba(0,0,0,.1)',
    lineCap: 'butt',
    easing: 'easeOutBounce',
    scaleColor: false,
    onStep: function (from, to, percent) {
      angular.element(this.el).find('.percent').text(Math.round(percent));
    }
  };

  angular.element('.piechart').each(function () {
    angular.element(this).css({
      'width': $scope.options1.size,
      'height': $scope.options1.size
    });
  });

}

angular
  .module('urbanApp')
  .controller('easyChartCtrl', ['$scope', easyChartCtrl]);
