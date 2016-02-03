(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name line.controller:LineCtrl
   *
   * @description
   *
   */
  angular
    .module('line')
    .controller('LineCtrl', LineCtrl);

  function LineCtrl() {
    var vm = this;
    vm.ctrlName = 'LineCtrl';
  }
}());
