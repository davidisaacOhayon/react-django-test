const http = require('http');
const cors = require('cors');
const corsMiddleware = cors(); // To allow Cross-Origin requests
// ^ this is because this node.js server will run on port 3000 whilst the react runs on another port.
// The differences in ports will cause the request to not be received.

const server = http.createServer((req, res) => {

  corsMiddleware(req, res, () => {
    if (req.method === 'GET' && req.url === '/api/data') {
      console.log("getting request...");
      const data = { message: 'Hello, React!' };
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
  
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});