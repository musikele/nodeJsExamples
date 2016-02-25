var http = require('http');

var server = http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});

	var ip = req.connection.remoteAddress + ':' + req.connection.remotePort;

	console.log('received request from ' + ip + " for " + req.url);

	res.end('Hello World\n');

});

server.listen(8080);

console.log('Server running on port 8080.');