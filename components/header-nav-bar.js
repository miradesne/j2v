import Head from 'next/head'
import styles from './header-nav-bar.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


export default function HeaderNavBar({ children, home }) {
  return (
    <div id={styles.navbar}>
      <div className={styles['navbar-button']}>
        <Link href = "">Subscribe</Link>
      </div>
      <div className={styles['navbar-button']}>
        <Link href = "/stories-list">Stories</Link>
      </div>
      <div className={styles['navbar-button']}>
        <Link href = "">About</Link>
      </div>
    </div>
  );
}
