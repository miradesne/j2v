import Head from 'next/head';
import styles from './header-nav-bar.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function HeaderNavBar({ children, home }) {
  return home ? (
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
  ) : (
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
  );
}
