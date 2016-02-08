/**
 * @ngdoc object
 * @name HomeCtrl
 * @description Controller for  Home screen
 * @author Created by jboothe on 11/25/15
 */

(function () {
  'use strict';
  var ctrlName = 'HomeCtrl';

  angular
    .module('home')
    .controller(ctrlName, Controller);

  Controller.$inject = ['$log', '$q', 'DriversService'];
  function Controller($log, $q, DriversService) {
    var homeCtrl = this;

    homeCtrl.myBarChart = {
      data: [
        {year: '2015 Q1', sales: 3, net: 2, profit: 1},
        {year: '2015 Q2', sales: 2, net: 0.9, profit: 0.45},
        {year: '2015 Q3', sales: 1, net: 0.4, profit: 0.2},
        {year: '2015 Q4', sales: 4, net: 3, profit: 1.5}
      ],
      options: {
        xkey: 'year',
        ykeys: ['sales', 'net', 'profit'],
        labels: ['Sales', 'Net', 'Profit'],
        barColors: ['#777777', '#e74c3c', 'rgb(11, 98, 164)'],
        lineColors: ['#777777', '#e74c3c', 'rgb(11, 98, 164)']
      }
    };

    activate();

    function activate() {
      var promises = []; //eslint-disable-line

      return $q.all(promises).then(function () {
        $log.info(ctrlName + ' Activated!');
      });
    }

  }
}());

//# sourceMappingURL=home-controller.js.map
