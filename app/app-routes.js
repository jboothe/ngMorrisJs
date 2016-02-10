(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

}());
