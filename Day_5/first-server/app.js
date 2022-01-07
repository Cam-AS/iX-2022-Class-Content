const express = require('express');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST,  PUT, PATCH, DELETE');
  next();
});

app.get('/', (req, res, next) => {
  res.json({
    message: 'Hello World from our first server',
  });
});

app.listen(port, () => {
  console.log('First Server is listening on port 3000!');
});
