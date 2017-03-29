const http = require('http');

const server = http.createServer( (req, res) => {
    // req es del tipo http.IncomingMessage, el cual es Readable Stream
    // res es del tipo http.ServerResponse, el cual es Writable Stream

});

server.listen(3000);
