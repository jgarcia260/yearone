import React, { useState } from 'react';
const axios = require('axios');
import styles from './Movie.scss';

export default ({ id, title, release_year, description, upvotes, downvotes }) => {
  const [isShowingDetails, setShowDetails] = useState(false);
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, setDownvote] = useState(downvotes);
  const [director, setDirector] = useState('Unavailable');

  const clickHandler = () => {
    if (director === 'Unavailable') {
      console.log(id);
      axios.get(`/movies/director/${id}`)
        .then(({ data }) => {
          setDirector(data);
        })
        .catch(console.log)
    }
    setShowDetails(!isShowingDetails);
  };

  const voteHandler = (e) => {
    e.preventDefault();
    if (e.target.name === 'upvote') {
      setUpvote(upvote + 1);
    } else {
      setDownvote(downvote - 1);
    }
  }

  return (
    <div className={styles.container}>
      <h2 onClick={clickHandler} className={styles.title}>{title}</h2>
      {!isShowingDetails ? null
        : (<div className={styles.description}>
          <p className={styles.info}>Release Year: {release_year}</p>
          <p className={styles.info}>Director: {director}</p>
          <p className={styles.info}>Description: {description}</p>
          <div className={styles.votes}>
            <div className={styles.votebtn}>
              <p className={styles.info} >Thumbs Up</p>
              <button onClick={voteHandler} name="upvote">{upvote}</button>
            </div>
            <div className={styles.votebtn}>
              <p className={styles.info}>Thumbs Down</p>
              <button onClick={voteHandler} name="downvote">{downvote}</button>
            </div>
          </div>
        </div>)}
    </div>
  )
};
