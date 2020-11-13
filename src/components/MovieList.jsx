import React from 'react';
import Movie from './Movie.jsx';

export default ({ movies }) => (
  <div>
    {movies.map(({ title, director, release_year, description, upvotes, downvotes }) => (<Movie title={title} director={director} release_year={release_year} description={description} upvotes={upvotes} downvotes={downvotes} key={title} />))}
  </div>
);
