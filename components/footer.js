import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ children, home }) {
  return (
    <div id={styles['footer-block']}>
      <div id={styles['footer-block-arrow-bg']} />
      <div id={styles['footer-block-content']}>
        <div className={styles.row}>
          <div className={styles.left} id={styles.logo}>
            J2V
          </div>
          <div className={styles.right} id={styles.title}>
            Journey to Valley
          </div>
        </div>

        <div className={styles.row} id={styles['menu-block']}>
          <div className={styles.left} />
          <div id={styles['menu-block-inner']}>
            <div className={styles.item}>
              <Link href='/'>
                <a>About</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href='/stories-list'>
                <a>Stories</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href='/'>
                <a>Contact us</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href='/'>
                <a>Subscribe</a>
              </Link>
            </div>
            <div className={`${styles.item} ${styles['privacy-policy']}`}>
              <Link href='/'>
                <a>Privacy policy and term </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.row} id={styles['follow-us-block']}>
          Follow us
        </div>

        <div className={styles.row} id={styles['socmed-block']}>
          <Link href='https://www.facebook.com/Journey-to-Valley-109788187490460/'>
            <img id={styles['socmed-block-fb']} src={'/images/homepage/fb_icon_grey.svg'} />
          </Link>
          <Link href='https://www.linkedin.com/company/68686498/admin/'>
            <img id={styles['socmed-block-ln']} src={'/images/homepage/linkedin_icon_grey.svg'} />
          </Link>
          <Link href='https://twitter.com/ValleyJourney'>
            <img id={styles['socmed-block-tw']} src={'/images/homepage/twitter_icon_grey.svg'} />
          </Link>
          <Link href='https://www.instagram.com/journeytovalley/'>
            <img id={styles['socmed-block-ig']} src={'/images/homepage/ig_icon_grey.svg'} />
          </Link>
        </div>

        <div className={styles.row} id={styles['copyright-block']}>
          © 2021 Journey to Valley. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
