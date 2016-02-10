'use strict';

config.$inject = ['$stateProvider'];

angular
  .module('basic', ['ui.router'])
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('basic', {
      url: '/basic',
      templateUrl: 'examples/basic/basic.html'
    })
}
