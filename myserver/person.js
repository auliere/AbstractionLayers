// Module: person.js
var person = {};
module.exports = person;

person.load = function(callback) {
  fs.readFile('./person.json', function(err, data) {
    if(!err) {
      var obj = JSON.parse(data);
      obj.birth = new Date(obj.birth);      
      var difference = new Date() - obj.birth;
      obj.age = Math.floor(difference / 31536000000);
      delete obj.birth;
      callback(err, obj)
    } else {
      callback(err, undefined);
    }
  })
}

person.write = function(data, callback) {  
  var types = {
    object: function(o) { 
      if(o.name) o.name = o.name.trim();
      return JSON.stringify(o); },
    string: function(s) {
      return object(JSON.parse(s)); },
    undefined: function() { callback("error"); }
  }
  fs.write('./person.json', types[typeof(data)](data), )
}
