/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LineCtrl', function () {
  var ctrl;

  beforeEach(module('line'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('LineCtrl');
  }));

  it('should have ctrlName as LineCtrl', function () {
    expect(ctrl.ctrlName).toEqual('LineCtrl');
  });
});
