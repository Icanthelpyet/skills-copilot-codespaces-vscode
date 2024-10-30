// Create web server
// Create a web server that listens on port 8080 and logs the following message to the console:
// "Server running at http://localhost:8080/"

const http = require('http');
const server = http.createServer((req, res) => {
  console.log('Server running at http://localhost:8080/');
});

server.listen(8080);
// Run the server
// Run the server with Node.js and visit the URL in your browser. You should see the message in the console. Press Ctrl+C to stop the server. If you get an error, make sure that you don't have another server running on the same port.
