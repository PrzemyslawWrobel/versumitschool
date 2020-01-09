import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
//import logoImage from '../../assets/images/logo.svg';

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={"https://www.versum.pl/wp-content/themes/wpserved-sage/dist/images/logo.svg"} alt="Versum logo" />
    <HeaderNavigation />
    <button onClick={openModalFn} className="button">new item</button>
  </header>
);

export default Header;