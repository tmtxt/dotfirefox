var {Ci, Cc, Cu} = require('chrome');

var dff = Cu.import('file:///Volumes/tmtxt/dff/index.js', {});
var { Class } = require('sdk/core/heritage');
var { Unknown, Factory } = require('sdk/platform/xpcom');

var contractId = '@truongtx.me/dotfirefox';
var DotFirefox = Class({
  extends: Unknown,
  get wrappedJSObject() {
    return dff;
  }
});
Factory({
  contract: contractId,
  Component: DotFirefox
});
