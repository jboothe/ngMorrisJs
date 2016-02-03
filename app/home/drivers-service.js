/**
 * @ngdoc object
 * @name DriversService
 * @description Service for Drivers Data
 * @author Created by jboothe on 11/26/15
 */

(function () {
  'use strict';

  angular.module('drivers', [])
    .factory('DriversService', DriversService);

  DriversService.$inject = ['$q'];
  function DriversService ($q) {
    var service = {
      findAll: findAll,
      findById: findById,
      getDonutData: getDonutData
    };

    /*eslint-disable */
    var driverSeasonResults = [
      {'id': 1, 'round': 1, 'qualifyPos': 1, 'finishPos': 2, 'points': 45, 'status': 'Finished', 'avgLap':197.34, 'fastLap': 204.54},
      {'id': 2, 'round': 2, 'qualifyPos': 3, 'finishPos': 4, 'points': 30, 'status': 'Finished', 'avgLap':188.34, 'fastLap': 200.1},
      {'id': 3, 'round': 3, 'qualifyPos': 5, 'finishPos': 6, 'points': 20, 'status': '+Laps', 'avgLap':175.95, 'fastLap': 188.41},
      {'id': 4, 'round': 4, 'qualifyPos': 1, 'finishPos': 3, 'points': 35, 'status': 'DNF', 'avgLap':187.34, 'fastLap': 204.54},
      {'id': 5, 'round': 5, 'qualifyPos': 3, 'finishPos': 9, 'points': 5, 'status': '+Laps', 'avgLap':177.34, 'fastLap': 185.15},
      {'id': 6, 'round': 6, 'qualifyPos': 2, 'finishPos': 1, 'points': 50, 'status': 'Finished', 'avgLap':167.34, 'fastLap': 179.03},
      {'id': 7, 'round': 7, 'qualifyPos': 5, 'finishPos': 5, 'points': 50, 'status': 'Finished', 'avgLap':197.34, 'fastLap': 210.33},
      {'id': 8, 'round': 8, 'qualifyPos': 1, 'finishPos': 10, 'points': 0, 'status': 'DNF', 'avgLap':207.34, 'fastLap': 222.22},
      {'id': 9, 'round': 9, 'qualifyPos': 4, 'finishPos': 7, 'points': 15, 'status': '+Laps', 'avgLap':197.89, 'fastLap': 206.41},
      {'id':10, 'round':10, 'qualifyPos': 10, 'finishPos': 5, 'points': 0, 'status': 'Finished', 'avgLap':185.29, 'fastLap': 196.54}
    ];
    /*eslint-enable */

    return service;

    function findAll() {
      var deferred = $q.defer();
      deferred.resolve(driverSeasonResults);
      return deferred.promise;
    }

    function findById(id) {
      var deferred = $q.defer();
      var employee = driverSeasonResults[id - 1];
      deferred.resolve(employee);
      return deferred.promise;
    }

    function getDonutData(data) {
      var deferred = $q.defer();
      deferred.resolve(aggregateDonutData2(data));
      return deferred.promise;
    }

    // function aggregateDonutData(data) {
    //   var newArray,
    //       obj = {};
    //   data.forEach(function(item) {
    //     item.status in obj ? obj[item.status] += 1 : obj[item.status] = 1;
    //   });
    //   newArray = Object.keys(obj).map(function(key) {
    //     return {label: key, value: obj[key]};
    //   });
    //   return newArray;
    // }

    function aggregateDonutData2(data) {
      var arr2 = Object.keys(arr2 = data.map(function(item) {
          return item.status;
      }).reduce(function(acc, curr){
          // these 4 assignments all work the same
          // acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
          // acc[curr] = acc[curr] === undefined ? acc[curr] = 1 : acc[curr] + 1;
          // acc[curr] = acc[curr] ? acc[curr] + 1 : acc[curr] = 1;
          acc[curr] = acc[curr] + 1 || 1;
          return acc;
      }, [])).map(function(item){
          return {label: item, value: arr2[item]};
      });
      return arr2;
    }

  }
}());
