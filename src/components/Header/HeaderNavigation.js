import React from 'react';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>Users</li>
      <li className={styles.navItem}>My favorite WWW</li>
      <li className={styles.navItem}>After hours </li>
    </ul>
  </nav>
);

export default HeaderNavigation;  