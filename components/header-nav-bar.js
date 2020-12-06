import Head from "next/head";
import styles from "./header-nav-bar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function HeaderNavBar({ children, home }) {
  return (
    <div id={styles.navbar}>
      <Link href="/">
        <a>
          <div className={styles["navbar-button"]}>Subscribe to our latest stories</div>
        </a>
      </Link>
      <Link href="/stories-list">
        <a>
          <div className={styles["navbar-button"]}>Stories</div>
        </a>
      </Link>
      <Link href="/stories-list">
        <a>
          <div className={styles["navbar-button"]}>About</div>
        </a>
      </Link>
    </div>
  );
}
