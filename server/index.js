const express = require('express');
const request = require('supertest');
const path = require('path');
const app = express();
const moviesRoute = require('./routes/movies.js');
const likesRoute = require('./routes/likes.js');
const PORT = 7999;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/movies', moviesRoute);
app.use('/likes', likesRoute);

app.listen(PORT, () => {
  console.log(`connected to http://localhost:${PORT}`);
});
