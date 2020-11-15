import React, { useState } from 'react';
import styles from './NavBar.scss';

import NavBarMovie from './NavBarMovie.jsx';

export default ({ movies }) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(6)

  const leftClick = () => {
    if (0 < start) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };

  const rightClick = () => {
    if (movies.length > end) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  let leftArrow = (<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className={styles.arrow}><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>);

  let rightArrow = (<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className={styles.arrow}><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>);

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} onClick={leftClick}>
        {/* {leftArrow} */}
      </div>
      {movies.slice(start, end).map(({ title, vote_average, poster_path }) => (<NavBarMovie title={title} vote_average={vote_average} poster_path={poster_path} key={title} />))}
      <div className={styles.arrowContainer} onClick={rightClick}>
        {/* {rightArrow} */}
      </div>
    </div>
  )
};
