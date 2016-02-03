(function () {
  'use strict';

  angular
    .module('ngMorrisJs')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
