const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.use('/feed', feedRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000!');
});
