(function () {
  'use strict';

  /* @ngdoc object
   * @name app
   * @description
   *
   */
  angular
    .module('app', [
      'ui.router',
      'ui.bootstrap',
      'home',
      'drivers',
      'line',
      'ng-morris-js'
    ]);
}());
