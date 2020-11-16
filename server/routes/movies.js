const express = require('express');
const moviesController = require('../controllers/movies.js');
const router = express.Router();

router.get('/', (req, res) => {
  moviesController.getTrendingMovies((err, result) => {
    if (err) {
      return res.status(404);
    }
    return res.status(200).send(result);
  })
});

router.get('/query/:query', (req, res) => {
  let { query } = req.params;
  if (query === '') {
    return res.status(400);
  }
  moviesController.getMovie(query, (err, result) => {
    if (err) {
      return res.status(500);
    }
    return res.status(200).send(result);
  })
});

router.get('/director/:movie_id', (req, res) => {
  let { movie_id } = req.params;
  moviesController.getMovieDirector(movie_id, (err, result) => {
    if (err) {
      return res.status(500);
    }
    return res.status(200).send(result);
  })
});

module.exports = router;
