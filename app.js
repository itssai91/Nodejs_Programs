const http = require('http'); // Importing Http Module

const server = http.createServer((req, res) => { // Create Server takes a Function, That Function Takes Two Parameters
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome Sai</title></head>');
    res.write('<body><h1>Hello Node JS</h1></body>');
    res.write('/html');
    res.end();
});

server.listen(3000);