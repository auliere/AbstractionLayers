// Module: loader.js

// Load: loads modules into context from a JSON-formatted file 
var load = function(context)
{
  var fs = require("fs");
  var content = fs.readFileSync("modules.txt", "utf8");
  var modules = JSON.parse(content);
  for (key in modules) {
    context[key] = require(modules[key]);
  }
}

module.exports = load;