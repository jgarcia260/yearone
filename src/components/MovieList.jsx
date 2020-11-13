import React from 'react';
import Movie from './Movie.jsx';

export default ({ movies }) => (
  <div>
    {movies.map((movie) => (<Movie title={movie.title} />))}
  </div>
);
