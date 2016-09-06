'use strict';

function nvd3Ctrl($scope, COLORS) {

  $scope.options1 = {
    chart: {
      type: 'lineChart',
      height: 450,
      margin: {
        top: 20,
        right: 20,
        bottom: 40,
        left: 60
      },
      x: function (d) {
        return d.x;
      },
      y: function (d) {
        return d.y;
      },
      useInteractiveGuideline: true,
      xAxis: {
        axisLabel: 'Time (ms)'
      },
      yAxis: {
        axisLabel: 'Voltage (v)',
        tickFormat: function (d) {
          return d3.format('.2f')(d);
        },
        axisLabelDistance: 0
      }
    },
    title: {
      enable: true,
      text: 'Title for Line Chart'
    },
    subtitle: {
      enable: true,
      text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
      css: {
        'text-align': 'center',
        'margin': '10px 13px 0px 7px'
      }
    },
    caption: {
      enable: true,
      html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style=\'text-decoration: underline;\'>vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style=\'color: darkred;\'>Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href=\'https://github.com/krispo/angular-nvd3\' target=\'_blank\'>2</a>, 3]</sup>.',
      css: {
        'text-align': 'justify',
        'margin': '10px 13px 0px 7px'
      }
    }
  };

  /*Random Data Generator */
  function sinAndCos() {
    var sin = [],
      sin2 = [],
      cos = [];

    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
      sin.push({
        x: i,
        y: Math.sin(i / 10)
      });
      sin2.push({
        x: i,
        y: i % 10 === 5 ? null : Math.sin(i / 10) * 0.25 + 0.5
      });
      cos.push({
        x: i,
        y: 0.5 * Math.cos(i / 10 + 2) + Math.random() / 10
      });
    }

    //Line chart data should be sent as an array of series objects.
    return [
      {
        values: sin, //values - represents the array of {x,y} data points
        key: 'Sine Wave', //key  - the name of the series.
        color: COLORS.primary //color - optional: choose your own line color.
                },
      {
        values: cos,
        key: 'Cosine Wave',
        color: COLORS.danger
                },
      {
        values: sin2,
        key: 'Another sine wave',
        color: COLORS.info
          // area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
  }

  $scope.data1 = sinAndCos();

  $scope.options2 = {
    chart: {
      type: 'discreteBarChart',
      height: 450,
      margin: {
        top: 20,
        right: 20,
        bottom: 60,
        left: 55
      },
      x: function (d) {
        return d.label;
      },
      y: function (d) {
        return d.value;
      },
      showValues: true,
      valueFormat: function (d) {
        return d3.format(',.4f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: 'X Axis'
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 30
      }
    }
  };

  $scope.data2 = [
    {
      key: 'Cumulative Return',
      values: [
        {
          'label': 'A',
          'value': -29.765957771107
                    },
        {
          'label': 'B',
          'value': 0
                    },
        {
          'label': 'C',
          'value': 32.807804682612
                    },
        {
          'label': 'D',
          'value': 196.45946739256
                    },
        {
          'label': 'E',
          'value': 0.19434030906893
                    },
        {
          'label': 'F',
          'value': -98.079782601442
                    },
        {
          'label': 'G',
          'value': -13.925743130903
                    },
        {
          'label': 'H',
          'value': -5.1387322875705
                    }
                ]
            }
        ];

  $scope.options3 = {
    chart: {
      type: 'multiBarHorizontalChart',
      height: 450,
      x: function (d) {
        return d.label;
      },
      y: function (d) {
        return d.value;
      },
      showControls: true,
      showValues: true,
      transitionDuration: 500,
      xAxis: {
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Values',
        tickFormat: function (d) {
          return d3.format(',.2f')(d);
        }
      }
    }
  };

  $scope.data3 = [
    {
      'key': 'Series1',
      'color': '#d62728',
      'values': [
        {
          'label': 'Group A',
          'value': -1.8746444827653
                    },
        {
          'label': 'Group B',
          'value': -8.0961543492239
                    },
        {
          'label': 'Group C',
          'value': -0.57072943117674
                    },
        {
          'label': 'Group D',
          'value': -2.4174010336624
                    },
        {
          'label': 'Group E',
          'value': -0.72009071426284
                    },
        {
          'label': 'Group F',
          'value': -0.77154485523777
                    },
        {
          'label': 'Group G',
          'value': -0.90152097798131
                    },
        {
          'label': 'Group H',
          'value': -0.91445417330854
                    },
        {
          'label': 'Group I',
          'value': -0.055746319141851
                    }
                ]
            },
    {
      'key': 'Series2',
      'color': '#1f77b4',
      'values': [
        {
          'label': 'Group A',
          'value': 25.307646510375
                    },
        {
          'label': 'Group B',
          'value': 16.756779544553
                    },
        {
          'label': 'Group C',
          'value': 18.451534877007
                    },
        {
          'label': 'Group D',
          'value': 8.6142352811805
                    },
        {
          'label': 'Group E',
          'value': 7.8082472075876
                    },
        {
          'label': 'Group F',
          'value': 5.259101026956
                    },
        {
          'label': 'Group G',
          'value': 0.30947953487127
                    },
        {
          'label': 'Group H',
          'value': 0
                    },
        {
          'label': 'Group I',
          'value': 0
                    }
                ]
            }
        ];

  $scope.options4 = {
    chart: {
      type: 'scatterChart',
      height: 450,
      color: d3.scale.category10().range(),
      scatter: {
        onlyCircles: false
      },
      showDistX: true,
      showDistY: true,
      tooltipContent: function (key) {
        return '<h3>' + key + '</h3>';
      },
      transitionDuration: 350,
      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function (d) {
          return d3.format('.02f')(d);
        }
      },
      yAxis: {
        axisLabel: 'Y Axis',
        tickFormat: function (d) {
          return d3.format('.02f')(d);
        },
        axisLabelDistance: 30
      }
    }
  };

  /* Random Data Generator (took from nvd3.org) */
  function generateData(groups, points) {
    var data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = d3.random.normal();

    for (var i = 0; i < groups; i++) {
      data.push({
        key: 'Group ' + i,
        values: []
      });

      for (var j = 0; j < points; j++) {
        data[i].values.push({
          x: random(),
          y: random(),
          size: Math.random(),
          shape: shapes[j % 6]
        });
      }
    }
    return data;
  }

  $scope.data4 = generateData(4, 40);

}

angular
  .module('urbanApp')
  .controller('nvd3Ctrl', ['$scope', 'COLORS', nvd3Ctrl]);
