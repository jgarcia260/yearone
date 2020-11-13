import React, { useState, useEffect } from 'react';
const axios = require('axios');

import MovieList from './MovieList.jsx';

export default () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movies')
      .then((data) => {
        setMovies(data.data);
      })
      .catch(console.log)
  }, [])

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  )
};
