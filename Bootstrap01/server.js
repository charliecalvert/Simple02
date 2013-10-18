var http = require('http');
var url = require('url');
var port = process.env.C9_PORT || 1337;
var fs = require('fs');

function getPath(request) {
	return url.parse(request.url).pathname;
}

function onRequest(request, response) {
    var pathname = getPath(request);
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

function first(request, response) {
	var path = getPath(request);
	console.log("Request for " + path + " received.");
	if (path === '/index.css') {
		var css = fs.readFileSync(__dirname + path);
		response.writeHead(200, {'Content-Type': 'text/css'});
		response.write(css);
	} if (path === '/About.html') {
		var css = fs.readFileSync(__dirname + path);
		response.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': '1877'});
		response.write(css);
	} if (path === '/Contacts.html') {
		var css = fs.readFileSync(__dirname + path);
		response.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': '1968'});
		response.write(css);
	} else {
	    var html = fs.readFileSync(__dirname + '/index.html');
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);
	}
    response.end();
}

http.createServer(first).listen(port);
console.log("Server has started:" + port);