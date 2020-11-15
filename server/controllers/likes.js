const moviesData = require('../../db/index.js');
module.exports = {
  upvote: ({ movie_id }, callback) => {
    if (!moviesData[movie_id]) {
      moviesData[movie_id] = {
        upvotes: 0,
        downvotes: 0,
      }
    }
    moviesData[movie_id].upvotes += 1;
    callback(null, moviesData[movie_id].upvotes);
  },
  downvote: ({ movie_id }, callback) => {
    if (!moviesData[movie_id]) {
      moviesData[movie_id] = {
        upvotes: 0,
        downvotes: 0,
      }
    }
    console.log(moviesData)
    moviesData[movie_id].downvotes -= 1;
    callback(null, moviesData[movie_id].downvotes);
  }
}
