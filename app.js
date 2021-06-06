const http = require('http'); // Importing Http Module

const server = http.createServer((req, res) => { // Create Server takes a Function, That Function
    console.log(req);                                      // Takes Two Parameters
});

server.listen(3000);