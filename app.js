var http = require("http");

http.createServer(function(req, res) {
    res.end("Hello world from Cloud9!");
}).listen(process.env.PORT, process.env.IP);