import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './style.scss';

export default () => (
  <div className={styles.navbar}>
    <ul className={styles.navigation}>
      <li>
        <IndexLink
          to="/"
          className={styles.a}
          activeClassName={styles.active}
        >
          Home
        </IndexLink>
      </li>
      <li>
        <Link
          to="/about/"
          className={styles.a}
          activeClassName={styles.active}
        >
          About
        </Link>
      </li>
    </ul>
  </div>
);
