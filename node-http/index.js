const http = require('http');

//file system core module
const fs = require('fs');
const path = require('path');
// allows you to read and write files from the system

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request for " + req.url + ' by method ' + req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') {
            fileUrl = '/index.html';
        } else {
            fileUrl = req.url;
        }

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404: ' + fileUrl + ' not found </h1></body></html>');

                    return;
                }

                // means everything is okay for the response message
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');

                // Reads into the file path and converts into a stream of bytes
                fs.createReadStream(filePath).pipe(res);
            })
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + ' not an HTML file </h1></body></html>');

            return;
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + ' not supported </h1></body></html>');

        return;
    }

})

// Starts up the listening port in which the server will listen to incoming requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});