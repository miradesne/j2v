import Head from 'next/head'
import styles from './header-nav-bar.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


export default function HeaderNavBar({ children, home }) {
  return (
    <div className={styles.button}>
      <Link href = "/stories-list">our stories</Link>
    </div>
  );
}
