const axios = require('axios');
const db = require('../../db/index.js');
const APIKEY = require('../config/keys.js');

module.exports = {
  getTrendingMovies: (callback) => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
      .then(({ data }) => {
        data = data || [];
        let movies = data.results.map((movie) => {
          let { id, original_title, title, poster_path, backdrop_path, vote_average } = movie;
          const picturePath = 'https://image.tmdb.org/t/p/original';
          title = title || original_title || 'movie title';
          poster_path = `${picturePath}${poster_path}` || `${picturePath}${backdrop_path}` || '#';
          vote_average = vote_average || 'N/A';
          return { id, title, poster_path, vote_average }
        })

        callback(null, movies);
      })
      .catch((err) => {
        callback('error');
      })
  },
  getMovieDirector: function (movieId, callback) {
    console.log('movieId', movieId)
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
          title = title || original_title || 'N/A'
          description = overview || 'N/A';
          release_year = release_date.slice(0, 4) || 'N/A';
          upvotes = db[id] ? db[id].upvotes : 0;
          downvotes = db[id] ? db[id].downvotes : 0;
          return { id, title, description, release_year, upvotes, downvotes };
        });
        callback(null, movies);
      })
      .catch((err) => {
        callback(err);
      })
  },
}
