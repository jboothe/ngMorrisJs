/* global describe, beforeEach, it, browser, expect */
'use strict';

var LinePagePo = require('./line.po');

describe('Line page', function () {
  var linePage;

  beforeEach(function () {
    linePage = new LinePagePo();
    browser.get('/#/line');
  });

  it('should say LineCtrl', function () {
    expect(linePage.heading.getText()).toEqual('line');
    expect(linePage.text.getText()).toEqual('LineCtrl');
  });
});
