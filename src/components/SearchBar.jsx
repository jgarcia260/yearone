import React, { useState } from 'react';
import Movie from './Movie.jsx';
import styles from './SearchBar.scss';

export default ({ searchHandler }) => {
  const [searchText, setSearchText] = useState('');

  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchHandler(searchText);
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search Here" className={styles.searchbar} value={searchText} onChange={changeHandler}></input>
      <span type="button" className={styles.btn} onClick={submitHandler}>Go</span>
    </div>
  )
};
