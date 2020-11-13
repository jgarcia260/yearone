import React, { useState, useEffect } from 'react';
const axios = require('axios');

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
      <h1>Hello World</h1>
    </div>
  )
};
