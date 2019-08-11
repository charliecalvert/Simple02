var http = require('http');
var port = process.env.PORT || 30025;
var fs = require('fs');

// A Comment I just added
function run(res) {
    function bar() {
        return 'Margie and Charlie 03 on port: ' + port;
    }

    fs.readFile('./Data.html', function(err, html) {
        if (err) {
            throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Bar Foo 01</h1>');
        res.write('<p>' + bar() + '</p>');
        res.write(html);
        res.end('<p>Hello HTTP from the JSNode\n</p>');
    });
}

var server = http.createServer(function(req, res) {
    run(res);
});

server.listen(port);
