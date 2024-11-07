const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello world, running in env: ${process.env.ENV}`);
});

app.get('/error', (req, res) => {
  process.exit();
});

app.get('/healthz', (req, res) => {
  res.send('OK');
});

app.listen(8080, () => console.log('listening on port 8080'));
