
var filePath = process.argv[2];

var fs = require('fs');

var content = fs.readFile(filePath,"utf-8",function(err,data){

var newlines = data.split('\n').length - 1 ;
console.log(newlines);

});

