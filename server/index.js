const express = require('express');
const request = require('supertest');
const app = express();
const data = require('../db/mock.js');
const PORT = 7999;

app.use(express.json());
app.use('/', express.static('../public'));

app.get('/movies', (req, res) => {
  res.status(200).json(data);
});

// app.get('/:user', (req, res) => {
//   res.status(200).json('hello world');
// });

// request(app)
//   .get('/:user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '13')
//   .expect(200)
//   .end((err, res) => {
//     if (err) throw err;
//   });

app.listen(PORT, () => {
  console.log(`connected to http://localhost:${PORT}`);
})

