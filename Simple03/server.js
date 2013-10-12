var http = require('http');
var port = process.env.C9_PORT || 1337;
var fs = require('fs');

http.createServer(function (request, response) {
    var html = fs.readFileSync(__dirname + '/Test01.html');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();
}).listen(port);