import { useState } from 'react';
import Head from 'next/head';
import styles from './header-nav-bar.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import SideDrawer from './side-drawer';
import Backdrop from '../backdrop';
import { NavLink } from './navlink';
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
          {home ? (
            <ScrollLink
              onClick={closeDrawer}
              className={styles['navbar-button']}
              to='subscribe-section'
              spy={true}
              smooth={true}
              duration={800}>
              Subscribe
            </ScrollLink>
          ) : (
            <a className={styles['navbar-button']} href='/#subscribe-section'>
              Subscribe
            </a>
          )}
          <NavLink exact className={styles['navbar-button']} href='/stories-list'>
            Stories
          </NavLink>
          <NavLink exact className={styles['navbar-button']} href='/about'>
            About
          </NavLink>
          <NavLink exact className={styles['navbar-button']} href='/'>
            Home
          </NavLink>
        </div>
      </SideDrawer>
      <div id={styles.navbar}>
        {home ? (
          <ScrollLink className={styles['navbar-button']} to='subscribe-section' spy={true} smooth={true} duration={500}>
            Subscribe
          </ScrollLink>
        ) : (
          <a className={styles['navbar-button']} href='/#subscribe-section'>
            Subscribe
          </a>
        )}
        <NavLink exact className={styles['navbar-button']} href='/stories-list'>
          Stories
        </NavLink>
        <NavLink exact className={styles['navbar-button']} href='/about'>
          About
        </NavLink>
        <NavLink exact className={styles['navbar-button']} href='/'>
          Home
        </NavLink>
      </div>
      <div id={styles['navbar-burger-container']}>
        <button id={styles['navbar-burger']} onClick={openDrawer}>
          <img src='/images/hamburger-icon.svg' alt='burger-icon'></img>
        </button>
      </div>
    </>
  );
}
