const fs = require('fs');
const express = require('express');
const http = require('http');

const app = express();

app.use(express.static('public'));

const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
  console.log(`App running at port 3000: http://localhost:3000/\n`);
});
