// libs
var { env } = require('sdk/system/environment');
var { Cu } = require('chrome');
var { Class } = require('sdk/core/heritage');
var { Unknown, Factory } = require('sdk/platform/xpcom');

// dotfirefox config file path
var homePath = env.HOME;
var dotfirefoxPath = `${homePath}/dotfirefox`;

// load dotfirefox config file
var dotfirefox = Cu.import(`file://${dotfirefoxPath}/index.js`, {});

// register it as a Cc
var contractId = '@truongtx.me/dotfirefox';
var DotFirefox = Class({
  extends: Unknown,
  get wrappedJSObject() {
    return dotfirefox;
  }
});
Factory({
  contract: contractId,
  Component: DotFirefox
});
