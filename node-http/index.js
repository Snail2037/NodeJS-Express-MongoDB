const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);

    // means everything is okay for the response message
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1> Hello, World! </h1></body></html>');
})

// Starts up the listening port in which the server will listen to incoming requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});