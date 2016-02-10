(function () {
  'use strict';

  config.$inject = ['$stateProvider'];
  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl'
      });
  }
}());
