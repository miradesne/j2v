import { useState } from 'react';
import Head from 'next/head';
import styles from './header-nav-bar.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import SideDrawer from './side-drawer';
import Backdrop from './backdrop';

export default function HeaderNavBar({ children, home }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return home ? (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer}></Backdrop>}
      <SideDrawer onClick={closeDrawer} show={drawerIsOpen}>
        <div id={styles.navbarSideDrawer}>
          <Link href='/'>
            <div className={styles['navbar-button']}>Subscribe</div>
          </Link>
          <Link href='/stories-list'>
            <div className={styles['navbar-button']}>Stories</div>
          </Link>
          <Link href='/stories-list'>
            <div className={styles['navbar-button']}>About</div>
          </Link>
        </div>
      </SideDrawer>
      <div id={styles.navbar}>
        <Link href='/'>
          <div className={styles['navbar-button']}>Subscribe</div>
        </Link>
        <Link href='/stories-list'>
          <div className={styles['navbar-button']}>Stories</div>
        </Link>
        <Link href='/stories-list'>
          <div className={styles['navbar-button']}>About</div>
        </Link>
      </div>
      <div id={styles['navbar-burger-container']}>
        <button id={styles['navbar-burger']} onClick={openDrawer}>
          <div className={styles['navbar-burger-layer']}></div>
          <div className={styles['navbar-burger-layer']}></div>
          <div className={styles['navbar-burger-layer']}></div>
        </button>
      </div>
    </>
  ) : (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer}></Backdrop>}
      <SideDrawer onClick={closeDrawer} show={drawerIsOpen}>
        <div id={styles.navbarSideDrawer}>
          <Link href='/'>
            <div className={styles['navbar-button']}>Subscribe</div>
          </Link>
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
        <Link href='/'>
          <div className={styles['navbar-button']}>Subscribe</div>
        </Link>
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
          <div className={styles['navbar-burger-layer']}></div>
          <div className={styles['navbar-burger-layer']}></div>
          <div className={styles['navbar-burger-layer']}></div>
        </button>
      </div>
    </>
  );
}
