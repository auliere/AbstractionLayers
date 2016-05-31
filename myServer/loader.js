function load(context)
{
  var fs = require("fs");
  var content = fs.readFileSync("modules.txt", "utf8");
  console.log(content);

}

load(global);