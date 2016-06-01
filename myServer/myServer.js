//Dependencies
require('./loader.js').load(global);

person.load(function(err, obj){
  if(!err) {
    console.log(JSON.stringify(obj));
  } else {
    console.log("Read error");
  }
})