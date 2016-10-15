var assert = require('assert');
var jsdom  = require('jsdom');

global.document   = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window     = document.defaultView;
global.navigator  = global.window.navigator;

var $button;
var dom = '<button class="button" type="button"></button>';

describe('ToggleClass', function(){
  before(function() {
    document.body.innerHTML = dom;
    $button = document.querySelectorAll('.button');
  });

  it('There is element', function () {
    assert.equal($button.length, 1);
  });
});
