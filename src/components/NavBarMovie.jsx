import React from 'react';
import styles from './NavBarMovie.scss';

export default ({ title, vote_average, poster_path }) => (
  <div className={styles.container}>
    <img src={poster_path} className={styles.img} />
    <p className={styles.text}>{title}</p>
    <p className={styles.text}>rating: {vote_average}</p>
  </div>
);
