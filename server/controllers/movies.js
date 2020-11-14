const axios = require('axios');
const db = require('../../db/index.js');
const APIKEY = require('../config/keys.js');

module.exports = {
  getTrendingMovies: (callback) => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
      .then((data) => {
        let movies = [];
        for (let movie of data.data.results) {
          let { original_title, backdrop_path, vote_average, title, poster_path, overview, id } = movie
          let picPath = 'https://image.tmdb.org/t/p/original'
          movies.push({
            title: title || original_title || 'movie title',
            poster_path: picPath + poster_path || picPath + backdrop_path || '',
            vote_average: vote_average || 'unavailable',
            id
          })
        }
        callback(null, movies);
      })
      .catch((err) => {
        callback('error');
      })
  },
  getMovieDirector: function (movieId, callback) {
    console.log('its coming in here', movieId)
    axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}`)
      .then(({ data }) => {
        for (let crew of data.crew) {
          if (crew.job.toLowerCase() === 'director') {
            callback(null, crew.name);
            break;
          }
        }
      })
      .catch((err) => {
        callback(err);
      })
  },
  getMovie: (query, callback) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(({ data }) => {
        let { results } = data;
        let movies = results.map((movie) => {
          let { id, original_title, title, overview, release_date } = movie;
          let movieData = {
            id,
            title: title || original_title,
            description: overview,
            release_year: release_date.slice(0, 4) || 'Unavailable'
          }
          return movieData;
        });
        callback(null, movies);
      })
      .catch((err) => {
        callback(err);
      })
  },

}
