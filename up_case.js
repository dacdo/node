var http = require('http');
var up_case = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(up_case("Hello World!"));
  res.end();
}).listen(8080);
