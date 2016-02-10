(function () {
  'use strict';

  config.$inject = ['$stateProvider'];
  angular
    .module('line')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('line', {
        url: '/line',
        templateUrl: 'line/views/line.tpl.html',
        controller: 'LineCtrl',
        controllerAs: 'line'
      });
  }
}());
