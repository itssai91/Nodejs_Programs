const http = require('http'); // Importing Http Module

const server = http.createServer((req, res) => { // Create Server takes a Function, That Function Takes Two Parameters

    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome Sai</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message" /><input type="submit" /></form></body>');
        res.write('/html');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome Sai</title></head>');
    res.write('<body><h1>Hello Node JS</h1></body>');
    res.write('/html');
    res.end();
});

server.listen(3000);