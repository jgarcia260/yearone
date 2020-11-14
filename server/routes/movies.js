const express = require('express');
const moviesController = require('../controllers/movies.js');
const router = express.Router();

router.get('/query/:query', (req, res) => {
  console.log('query')
  let { query } = req.params;
  console.log(query)
  if (query === '') {
    return res.status(400);
  }
  moviesController.getMovie(query, (err, result) => {
    if (err) {
      return res.status(400);
    }
    return res.status(200).send(result);
  })
});

router.get('/director/:movie_id', (req, res) => {
  let { movie_id } = req.params;
  console.log(movie_id, 'movieid')
  moviesController.getMovieDirector(movie_id, (err, result) => {
    if (err) {
      return res.status(400);
    }
    return res.status(200).send(result);
  })
});

router.get('/', (req, res) => {
  moviesController.getTrendingMovies((err, result) => {
    if (err) {
      return res.status(404);
    }
    return res.status(200).send(result);
  })
});

module.exports = router;
