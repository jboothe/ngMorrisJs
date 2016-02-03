(function () {
  'use strict';

  angular
    .module('ngMorrisJs')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());

//# sourceMappingURL=app-routes.js.map
