var http = require('http');

var fs = require("fs");

var server = http.createServer(function(request, serverres) {
    serverres.writeHead(200,
        { "Content-Type": "text/html" });
    serverres.end(fs.readFileSync('./Resume.html', {encoding:'utf-8', flag:'r'}));
});
server.listen(6789, () => {
    console.log("ok");
});