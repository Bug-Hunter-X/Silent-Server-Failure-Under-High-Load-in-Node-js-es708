const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

const port = 8080;

const handleError = (err) => {
  console.error('Server error:', err);
  server.close(() => {
    console.log('Server closed gracefully.');
  });
};

//Setting up error handling

server.on('error', handleError);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//Graceful shutdown on SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log('Received SIGINT signal. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});