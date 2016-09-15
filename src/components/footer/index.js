import React from 'react';
import styles from './style.scss';
import gh from './gh.png';

export default () => (
  <div className={styles.footer}>
    <div className="wrapper">
      <a href="https://github.com/samuelgh" alt="Github.com Roc"><img className={styles.gh} src={gh} /></a>
    </div>
  </div>
);
