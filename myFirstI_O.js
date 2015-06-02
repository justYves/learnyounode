
var filePath = process.argv[2];

var fs = require('fs');

var content = fs.readFileSync(filePath).toString();
var newlines = content.split('\n').length - 1 ;
console.log(newlines);
