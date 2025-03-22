const http = require('http');
const app = require('./server');

function normalizePort(val) {
  const port = Number(val);
  return (Number.isInteger(port) && port >= 0) ? port : false;
}

function createServer() {
  return http.createServer(app);
}

function startServer(server, port = process.env.PORT || 3000) {
  const normalizedPort = normalizePort(port);

  return new Promise((resolve, reject) => {
    server.listen(normalizedPort, () => {
      const actualPort = server.address().port;
      console.log(`Server is running on port ${actualPort}`);
      resolve(server);
    });

    server.on('error', reject);
  });
}

const server = createServer();

if (require.main === module) {
  startServer(server).catch(console.error);
}

module.exports = {
  server,
  startServer,
  createServer,
};



