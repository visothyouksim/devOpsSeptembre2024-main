var http = require('http');
var os = require('os');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('<html><body><b>Hello World</b> from hostname=<i>'+ os.hostname() + '</i></body></html>');
};
var www = http.createServer(handleRequest);
www.listen(8080);
