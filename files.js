var abc = require('fs');

abc.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Opened!');
});

abc.appendFile('mynewfile2.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

abc.appendFile('mynewfile2.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

/*
abc.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});
*/
