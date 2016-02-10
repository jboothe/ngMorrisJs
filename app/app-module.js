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
      'hljs',
      'home',
      'basic',
      'drivers',
      'line',
      'ng-morris-js'
    ]);
}());
