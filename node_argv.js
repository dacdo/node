#!/usr/bin/env node

'use strict';

for (let j = 0; j < process.argv.length; j++) {  
    console.log(j + ' -> ' + (process.argv[j]));
}

console.log('2nd argv' + ' is ' + (process.argv[2]))

var fs = require("fs");

var content = fs.readFileSync(process.argv[2], 'utf8');

fs.readFile(process.argv[2], function(err, data) {
  console.log(data.toString());
});

// var data = "New File Contents";
fs.writeFile("output.txt", content, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
