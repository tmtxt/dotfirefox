var self = require("sdk/self");
var {Cu, Ci, Cc} = require("chrome");

// Cu.import("resource://gre/modules/Services.jsm");
var { Services }  = require("resource://gre/modules/Services.jsm");

var resProt = Services.io.getProtocolHandler("resource")
      .QueryInterface(Ci.nsIResProtocolHandler);

var aliasFile = Cc["@mozilla.org/file/local;1"]
      .createInstance(Ci.nsILocalFile);
aliasFile.initWithPath("/Volumes/tmtxt/dotfirefox");

var aliasURI = Services.io.newFileURI(aliasFile);
resProt.setSubstitution("dotfirefox", aliasURI);

let { main, Loader, Require, unload } = require('toolkit/loader');
let options = require('@loader/options');
options.paths['dotfirefox/'] = 'resource://dotfirefox/';
let loader = Loader(options);
let program = main(loader, 'dotfirefox/index.js');
console.log(program);

// require('dotfirefox/index.js');
// let require2 = Cu.import("resource://gre/modules/commonjs/toolkit/require.js", {}).require;
// require2('dotfirefox/index.js');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
