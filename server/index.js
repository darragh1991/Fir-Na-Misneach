const fs = require('fs');
const https = require('https');
const http = require('http');
const app = require('./server');
require('dotenv').config();

function normalizePort(val) {
  const port = Number(val);
  return (Number.isInteger(port) && port >= 0) ? port : false;
}

function createServer() {
  if (process.env.USE_HTTPS === 'true') {
    const options = {
      key: fs.readFileSync('./certs/key.pem'),
      cert: fs.readFileSync('./certs/cert.pem')
    };
    return https.createServer(options, app);
  } else {
    return http.createServer(app);
  }
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
