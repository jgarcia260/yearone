import React, { useState, useEffect } from 'react';
const axios = require('axios');
import styles from './App.scss';

import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

export default () => {
  const [movies, setMovies] = useState([]);

  //get top 10 latest movies
  useEffect(() => {
    axios.get('/movies')
      .then((data) => {
        setMovies(data.data);
      })
      .catch(console.log)
  }, [])

  const searchHandler = (movieTitle) => {
    movieTitle = movieTitle.toLowerCase();
  };

  return (
    <div className={styles.container}>
      <SearchBar searchHandler={searchHandler} />
      <MovieList movies={movies} />
    </div>
  )
};
