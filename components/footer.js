import styles from './footer.module.css'


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
          <div class={styles.item}><a href=''>About</a></div>
          <div class={styles.item}><a href='/stories-list'>Stories</a></div>
          <div class={styles.item}><a href=''>Contact us</a></div>
          <div class={styles.item}><a href=''>Privacy policy and term</a></div>
          <div class={styles['item-last']}><a href=''>Subscribe to our latest stories</a></div>
        </div>
      </div>

      <div class={styles.row} id={styles['follow-us-block']}>
        Follow us
      </div>

      <div class={styles.row} id={styles['socmed-block']}>
        <a href=''><img src='images/homepage/fb_icon_grey.svg' /></a>
        <a href=''><img src='images/homepage/linkedin_icon_grey.svg' /></a>
        <a href=''><img src='images/homepage/twitter_icon_grey.svg' /></a>
        <a href=''><img src='images/homepage/ig_icon_grey.svg' /></a>
      </div>

      <div class={styles.row} id={styles['copyright-block']}>
        Copyright © 2020 journeytovalley.org. All Rights Reserved.
      </div>
    </div>
  );
}
