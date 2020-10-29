const fs = require('fs');
const express = require('express');
const https = require('https');

const app = express();

app.use(express.static('public'));

const privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000, () => {
  console.log(`HTTPS App running at port 3000: https://localhost:3000/\n`);
});

// openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./server.key -out server.crt
// https://stackoverflow.com/a/52007971
