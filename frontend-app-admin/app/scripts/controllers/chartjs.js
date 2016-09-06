'use strict';

function chartjsCtrl($scope, COLORS) {

  //Chartjs Globals
  $scope.globalOptions = {

    // String - Scale label font declaration for the scale label
    scaleFontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    // Number - Scale label font size in pixels
    scaleFontSize: 10,

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: true,

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 12,

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 13,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: '700',

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 2,

  };

  $scope.barOptions = {
    scaleShowGridLines: false,
    barShowStroke: false,
  };

  angular.extend($scope.barOptions, $scope.globalOptions);

  $scope.barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        fillColor: 'rgba(220,220,220,1)',
        highlightFill: 'rgba(220,220,220,1)',
        data: [$scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary()]
            },
      {
        fillColor: 'rgba(151,187,205,1)',
        highlightFill: 'rgba(151,187,205,1)',
        data: [$scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary()]
            }
        ]
  };

  $scope.lineOptions = {
    scaleShowGridLines: false,
    bezierCurve: false,
    pointDotRadius: 2,
    datasetStrokeWidth: 1,
  };

  angular.extend($scope.lineOptions, $scope.globalOptions);

  $scope.lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [$scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary()]
            },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [$scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary(), $scope.getRandomArbitrary()]
            }
        ]
  };

  $scope.polarOptions = {
    segmentShowStroke: false,
    scaleBackdropColor: 'rgba(255,255,255,1)',
    scaleShowLine: false,
  };

  angular.extend($scope.polarOptions, $scope.globalOptions);

  $scope.polarData = [
    {
      value: 80,
      color: COLORS.danger
      },
    {
      value: 70,
      color: COLORS.info
      },
    {
      value: 100,
      color: COLORS.warning
      },
    {
      value: 40,
      color: COLORS.bodyBg
      },
    {
      value: 120,
      color: COLORS.dark
      },
    {
      value: 90,
      color: COLORS.primary
      }
    ];

  $scope.radarOptions = {
    pointDotRadius: 0,
    pointLabelFontFamily: '"Roboto"',
    pointLabelFontSize: 10
  };

  angular.extend($scope.radarOptions, $scope.globalOptions);

  $scope.radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Partying', 'Running'],
    datasets: [{
        fillColor: 'rgba(220,220,220,1)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        data: [65, 59, 90, 81, 56, 55, 40
            ]
                },
      {
        fillColor: 'rgba(151,187,205,1)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        data: [28, 48, 40, 19, 96, 27, 100]
            }]
  };

  $scope.doughnutOptions = {
    percentageInnerCutout: 60,
  };

  angular.extend($scope.doughnutOptions, $scope.globalOptions);

  $scope.doughnutData = [{
      value: 280,
      color: COLORS.danger,
      highlight: LightenDarkenColor(COLORS.danger, 20),
      label: 'Danger'
        },
    {
      value: 70,
      color: COLORS.success,
      highlight: LightenDarkenColor(COLORS.success, 20),
      label: 'Success'
        },
    {
      value: 100,
      color: COLORS.warning,
      highlight: LightenDarkenColor(COLORS.warning, 20),
      label: 'Warning'
        },
    {
      value: 40,
      color: COLORS.bodyBg,
      highlight: LightenDarkenColor(COLORS.bodyBg, 20),
      label: 'Body'
        },
    {
      value: 120,
      color: COLORS.dark,
      highlight: LightenDarkenColor(COLORS.dark, 20),
      label: 'Dark'
        }];

  $scope.pieOptions = {
    segmentShowStroke: false
  };

  angular.extend($scope.pieOptions, $scope.globalOptions);

  $scope.pieData = [
    {
      value: 300,
      color: COLORS.danger,
      highlight: LightenDarkenColor(COLORS.danger, 20),
      label: 'Danger'
                },
    {
      value: 50,
      color: COLORS.success,
      highlight: LightenDarkenColor(COLORS.success, 20),
      label: 'Success'
                },
    {
      value: 100,
      color: COLORS.warning,
      highlight: LightenDarkenColor(COLORS.warning, 20),
      label: 'Warning'
                },
    {
      value: 40,
      color: COLORS.bodyBg,
      highlight: LightenDarkenColor(COLORS.bodyBg, 20),
      label: 'Body'
                },
    {
      value: 120,
      color: COLORS.dark,
      highlight: LightenDarkenColor(COLORS.dark, 20),
      label: 'Dark'
                }

            ];

}


angular
  .module('urbanApp')
  .controller('chartjsCtrl', ['$scope', 'COLORS', chartjsCtrl]);
