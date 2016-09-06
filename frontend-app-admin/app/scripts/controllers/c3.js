'use strict';

function c3Ctrl($scope) {

  $scope.config = {
          data: {
            x: 'x',
            columns: [
                ['x', '2012-12-29', '2012-12-30', '2012-12-31'],
                ['data1', 230, 300, 330],
                ['data2', 190, 230, 200],
                ['data3', 90, 130, 180],
            ]
          },
          axis: {
              x: {
                  type: 'timeseries',
                  tick: {
                      format: '%m/%d',
                  }
              }
          }
        };

  $scope.chart = {
    options: {
      type: 'line',
      selection: {
        enabled: true
      },
    },
    series: [
      {
        name: 'Data 1',
        data: [[1, 30], [2, 200], [3, 100], [4, 400], [5, 150], [6, 250], [7, 50], [8, 100], [9, 250]]
            },
      {
        name: 'Data 2',
        data: [[1, 100], [2, 30], [3, 200], [4, 320], [5, 50], [6, 150], [7, 230], [8, 80], [9, 150]]
            }
        ]
  };

  $scope.chart2 = {
    options: {
      type: 'bar',
      selection: {
        enabled: true
      },
    },
    series: [
      {
        name: 'Data 1',
        data: [[1, 30], [2, 200], [3, 100], [4, 400], [5, 150], [6, 250], [7, 50], [8, 100], [9, 250]]
            },
      {
        name: 'Data 2',
        data: [[1, 100], [2, 30], [3, 200], [4, 320], [5, 50], [6, 150], [7, 230], [8, 80], [9, 150]]
            }
        ]
  };
}

angular
  .module('urbanApp')
  .controller('c3Ctrl', ['$scope', c3Ctrl]);
