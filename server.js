const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});

// Uncommon bug: In a high-traffic environment, this simple server might fail silently due to exceeding the operating system's limits for open file descriptors. This can lead to new connections being refused without explicit error messages.  The error may not appear in the server's console logs.