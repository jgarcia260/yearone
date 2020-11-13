const axios = require('axios');
const db = require('../../db/index.js');
const APIKEY = require('../keys.js');

module.exports = {
  getTrendingMovies: (callback) => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
      .then((data) => {
        let movies = [];
        for (let movie of data.data.results) {
          let { original_title, backdrop_path, vote_average, title, poster_path, overview } = movie
          let picPath = 'https://image.tmdb.org/t/p/original'
          movies.push({
            title: title || original_title || 'movie title',
            poster_path: picPath + poster_path || picPath + backdrop_path || '',
            vote_average: vote_average || 'unavailable'
          })
        }
        callback(null, movies);
      })
      .catch((err) => {
        callback('error');
      })
  },
  getMovie: (query, callback) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(({ data }) => {
        //loop through every single one and get director
        let movies = [];
        //call get director
        callback(null, data);
      })
      .catch((err) => {
        callback(err);
      })
  },
  getDirector: (movieId) => {
    axios(``)
      .then()
      .catch()
  },
}


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
