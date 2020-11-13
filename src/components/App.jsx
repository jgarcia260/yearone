import React, { useState, useEffect } from 'react';
const axios = require('axios');
import styles from './App.scss';
import moviesData from '../../db/mock.js';

import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import NavBar from './NavBar.jsx';

export default () => {
  const [navMovies, setNavMovies] = useState([]);
  const [movies, setMovies] = useState(moviesData);
  //get top 10 latest movies
  useEffect(() => {
    axios.get('/movies')
      .then((data) => {
        console.log(data);
        setNavMovies(data.data);
      })
      .catch(console.log)
    // setMovies(moviesData)
  }, [])

  const searchHandler = (movieTitle) => {
    movieTitle = movieTitle.toLowerCase();
  };

  return (
    <div className={styles.container}>
      <NavBar movies={navMovies} />
      <SearchBar searchHandler={searchHandler} />
      <MovieList movies={movies} />
    </div>
  )
};
