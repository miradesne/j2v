import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer({ children, home }) {
  return (
    <div id={styles['footer-block']}>
      <div class={styles.row}>
        <div class={styles.left} id={styles.logo}>
          J2V
        </div>
        <div class={styles.right} id={styles.title}>
          Journey to Valley
        </div>
      </div>

      <div class={styles.row} id={styles['menu-block']}>
        <div class={styles.left} />
        <div id={styles['menu-block-inner']}>
          <div class={styles.item}><Link href=''><a>About</a></Link></div>
          <div class={styles.item}><Link href='/stories-list'><a>Stories</a></Link></div>
          <div class={styles.item}><Link href=''><a>Contact us</a></Link></div>
          <div class={styles.item}><Link href=''><a>Privacy policy and term</a></Link></div>
          <div class={styles['item-last']}><Link href=''><a>Subscribe to our latest stories</a></Link></div>
        </div>
      </div>

      <div class={styles.row} id={styles['follow-us-block']}>
        Follow us
      </div>

      <div class={styles.row} id={styles['socmed-block']}>
        <Link href='https://www.facebook.com/Journey-to-Valley-109788187490460/'><a>
          <img src='images/homepage/fb_icon_grey.svg' />
        </a></Link>
        <Link href='https://www.linkedin.com/company/68686498/admin/'><a>
          <img src='images/homepage/linkedin_icon_grey.svg' />
        </a></Link>
        <Link href='https://twitter.com/ValleyJourney'><a>
          <img src='images/homepage/twitter_icon_grey.svg' />
        </a></Link>
        <Link href='https://www.instagram.com/journeytovalley/'><a>
          <img src='images/homepage/ig_icon_grey.svg' />
        </a></Link>
      </div>

      <div class={styles.row} id={styles['copyright-block']}>
        Copyright © 2020 journeytovalley.org. All Rights Reserved.
      </div>
    </div>
  );
}
