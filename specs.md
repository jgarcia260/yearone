DATABASE Javascript Object
movies = {title : {title, director, release year, description thumbsUp, thumbsDown}}

SERVER tech: express, supertest
GET /movies/:movieTitle
check database and fetch from api.
  if title exists in db, use db data instead of api data for movie
return {title, director, release year, description thumbsUp, thumbsDown}

POST /likes/:movieTitle
persist data if a movie title is liked/ disliked

FRONTEND tech: webpack, babel, react, axios
allows a user to search for a movie title, click on that movie title for more information, and give that movie a thumbs up or thumbs down.

Components: App (state), SearchBar, MovieList, Movie

TODO
Create Mock Data
Build Server API
Build Front End => App - Movie - MovieList - SearchBar
Connect Movie API instead of mock
