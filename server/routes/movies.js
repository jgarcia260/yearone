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

// router.get('/:movieTitle', () => {

// });

// {
//   "id": 340102,
//   "video": false,
//   "vote_count": 576,
//   "vote_average": 6.2,
//   "title": "The New Mutants",
//   "release_date": "2020-08-26",
//   "original_language": "en",
//   "original_title": "The New Mutants",
//   "genre_ids": [
//     28,
//     878,
//     27,
//     12
//   ],
//   "backdrop_path": "/eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg",
//   "adult": false,
//   "overview": "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
//   "poster_path": "/xrI4EnZWftpo1B7tTvlMUXVOikd.jpg",
//   "popularity": 1195.685,
//   "media_type": "movie"
// },

module.exports = router;
