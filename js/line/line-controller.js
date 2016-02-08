/**
 * @ngdoc object
 * @name lineCtrl
 * @description Controller for  screens
 * @author Created by jboothe on 11/25/15
 */

(function () {
  'use strict';
  var ctrlName = 'LineCtrl';

  angular
    .module('line')
    .controller(ctrlName, LineCtrl);

  LineCtrl.$inject = ['$log', '$q', 'DriversService'];
  function LineCtrl($log, $q, DriversService) {
    var lineCtrl = this;

    // Line & Area Chart Options
    // http://morrisjs.github.io/morris.js/lines.html
    lineCtrl.driverLineChart = {
      data: [],
      options: {
        xkey: 'round',
        ykeys: ['finishPos', 'qualifyPos'],
        labels: ['Finished', 'Qualified'],
        lineColors: ['rgba(205, 38, 38, 0.5)', 'rgba(100, 100, 100, 0.5)'],
        lineWidth: 3,
        pointSize: 4,
        pointFillColors: ['#c7254e'],
        pointStrokeColors: ['#ffffff'],
        ymin: -10,
        ymax: -1,
        smooth: true,
        hideHover: false,
        // hoverCallback: hoverCallbackFunc,
        parseTime: false,
        // postUnits: '%',
        // preUnits: '$',
        // dateFormat: dateFormatFunc,
        // xLabels: "month",
        // xLabelFormat: xLabelFormatFunc,
        // xLabelAngle: 0,
        yLabelFormat: yLabelPosFormatter,
        goals: [-1.0],
        goalLineColors: ['#c0c0c0'],
        goalStrokeWidth: 1,
        // events: [],
        // eventStrokeWidth: 1,
        // eventLineColors: #cccccc,
        // axes: false,
        grid: false,
        // gridTextColor: #888888,
        // gridTextSize: 12,
        // gridTextFamiliy: sans-serif,
        // gridTextWeight: normal,
        resize: true,

        // Area Chart Options
        fillOpacity: 0.3,
        behaveLikeLine: true
      }
    };

    // Bar Chart Options
    // http://morrisjs.github.io/morris.js/bars.html
    lineCtrl.driverBarChart = {
      data: [],
      options: {
        xkey: 'round',
        ykeys: ['avgLap', 'fastLap'],
        labels: ['Avg Lap', 'Fastest Lap'],
        barColors: ['#777777', '#e74c3c'],
        stacked: false,
        hideHover: false,
        // hoverCallback: hoverCallbackFunc,
        // axes: false,
        grid: false,
        // gridTextColor: #888888,
        // gridTextSize: 12,
        // gridTextFamiliy: sans-serif,
        // gridTextWeight: normal,
        resize: true,
        yLabelFormat: yLabelMPHFormatter
      }
    };

    // Donut Chart Options
    // http://morrisjs.github.io/morris.js/donuts.html
    lineCtrl.driverDonutChart = {
      data: [
        {label: 'Top 5', value: 6},
        {label: 'Top 10', value: 3},
        {label: 'DNF', value: 1}
      ],
      options: {
        colors: ['#e74c3c', '#c0392b', '#777777'],
        resize: true
        // formatter: donutFormatFunc
      }
    };

    activate();

    function activate() {
      var promises = [getDriverRaceResults()]; //eslint-disable-line

      return $q.all(promises).then(function () {
        $log.info(ctrlName + ' Activated!');
      });
    }

    function getDriverRaceResults() {
      return DriversService.findAll()
        .then(function (res) {
          $log.info('Got '+ res.length + ' Driver Race results', res);
          lineCtrl.driverLineChart.data = negativeData(res, ['qualifyPos', 'finishPos']);
          lineCtrl.driverBarChart.data = res;
          getDonutData(res);
          // lineCtrl.driverDonutChart.data = DriversService.getDonutData(res);
        },
        function (error) {
          $log.error('Error getting Driver Race results', error);
        });
    }

    function getDonutData(data) {
      return DriversService.getDonutData(data)
        .then(function (res) {
            lineCtrl.driverDonutChart.data = res;
            $log.info('Donut Data ', lineCtrl.driverDonutChart.data);
        });
    }

    // Convert finish and qualifying position numbers to negative values
    // to support reversing y-axis of line chart
    // Takes the data array and an array of properties to be converted to negatives
    function negativeData(arr, props) {
      var newArr = arr.map(function (x) {
        for (var i = 0; i < props.length; i++) {
          x[props[i]] = x[props[i]] > 0 ? -x[props[i]] : null;
        }
        return x;
      });
      return newArr;
    }

    // Formatting Y Label - Note: Math.round is not entirely accurate but close.
    // Since Morris Chart doesn't have a "force integer" option, we are rounding
    // to nearest whole number.
    function yLabelPosFormatter(y) {
      if (isNaN(y)) { return 'n/a'; }
      y = Math.round(y);
      return y === 0 ? 'P1' : 'P' + -y;
    }

    // Round speed to 2 decimal places and add MPH suffix
    function yLabelMPHFormatter(y) {
      return isNaN(y) ? 'n/a' : y.toFixed(2)+' MPH';
    }

  }
}());

//# sourceMappingURL=line-controller.js.map
