#!/usr/local/bin/node
var http = require('http');
http.createServer(function (req, res) 
{
	console.log(req.headers.host);

	if(req.headers.host != 'gruen')
	{
		res.writeHead(302, {'Location': 'http://gruen/'});
		res.end();
	}
	else
	{
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('gruen\n');
	}
}).listen(80, '10.0.10.1');

