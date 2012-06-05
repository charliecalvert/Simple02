var http = require('http');
var port = process.env.C9_PORT || 1337;
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>BarFoo 01</h1>');
    res.write('<p>' + bar() + '</p>');
    res.end('<p>Hello HTTP from the JSNode\n</p>');
});

server.listen(port);

function bar()
{
    return "Margie and Charlie 03s";
}