import { useState } from 'react';
import Head from 'next/head';
import styles from './header-nav-bar.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import SideDrawer from './side-drawer';
import Backdrop from './backdrop';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

export default function HeaderNavBar({ children, home }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer}></Backdrop>}
      <SideDrawer onClick={closeDrawer} show={drawerIsOpen}>
        <div id={styles.navbarSideDrawer}>
          <ScrollLink
            onClick={closeDrawer}
            className={styles['navbar-button']}
            to='subscribe-section'
            spy={true}
            smooth={true}
            duration={800}>
            <div className={styles['navbar-button']}>Subscribe</div>
          </ScrollLink>
          <Link href='/stories-list'>
            <div className={styles['navbar-button']}>Stories</div>
          </Link>
          <Link href='/stories-list'>
            <div className={styles['navbar-button']}>About</div>
          </Link>
          <Link href='/'>
            <div className={styles['navbar-button']}>Home</div>
          </Link>
        </div>
      </SideDrawer>
      <div id={styles.navbar}>
        <ScrollLink to='subscribe-section' spy={true} smooth={true} duration={500}>
          <div className={styles['navbar-button']}>Subscribe</div>
        </ScrollLink>
        <Link href='/stories-list'>
          <div className={styles['navbar-button']}>Stories</div>
        </Link>
        <Link href='/stories-list'>
          <div className={styles['navbar-button']}>About</div>
        </Link>
        <Link href='/'>
          <div className={styles['navbar-button']}>Home</div>
        </Link>
      </div>
      <div id={styles['navbar-burger-container']}>
        <button id={styles['navbar-burger']} onClick={openDrawer}>
          <img src='images/hamburger-icon.svg' alt='burger-icon'></img>
        </button>
      </div>
    </>
  );
}
