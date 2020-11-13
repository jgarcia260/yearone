import React, { useState } from 'react';
import styles from './Movie.scss';

export default ({ title, director, release_year, description, upvotes, downvotes }) => {
  const [isShowingDetails, setShowDetails] = useState(false);

  const clickHandler = () => {
    setShowDetails(!isShowingDetails);
  };

  return (
    <div className={styles.container}>
      <h2 onClick={clickHandler} className={styles.title}>{title}</h2>
      {!isShowingDetails ? null
        : (<div className={styles.description}>
          {director}
          {release_year}
          {description}
          {upvotes}
          {downvotes}
        </div>)}
    </div>
  )
};
