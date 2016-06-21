const {env} = require('sdk/system/environment');
var {Ci, Cc} = require('chrome');
var {Services}  = require('resource://gre/modules/Services.jsm');

// dotfirefox path
const homePath = env.HOME;
const dotfirefoxPath = `${homePath}/dotfirefox/`;

// register 'dotfirefox' as an alias path, taken from
// https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using
var resProt = Services.io.getProtocolHandler('resource')
      .QueryInterface(Ci.nsIResProtocolHandler);
var aliasFile = Cc['@mozilla.org/file/local;1']
      .createInstance(Ci.nsILocalFile);
aliasFile.initWithPath(dotfirefoxPath);
var aliasURI = Services.io.newFileURI(aliasFile);
resProt.setSubstitution('dotfirefox', aliasURI);

// create custom loader for dotfirefox dir and load ~/dotfirefox as main application
// https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/_loader
let {main, Loader} = require('toolkit/loader');
let options = require('@loader/options');
options.paths['dotfirefox/'] = 'resource://dotfirefox/';
let loader = Loader(options);
main(loader, 'dotfirefox/index.js');
