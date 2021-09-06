import React from 'react';
import styles from './learn-more-about-us.module.css';

const learnMoreAboutUs = () => {
  return (
    <div className={styles['lmau-container']}>
      <h1 className={styles['lmau-title']}>Learn More About Us</h1>
      <img
        className={styles['lmau-image']}
        src='https://www.ruparupa.com/blog/wp-content/uploads/2020/03/Tips-Bangun-Kekompakan-Tim-Selama-Masa-Work-From-Home.jpg'
      />
      <span className={styles['lmau-image-caption']}>Image/Photo: Firstname Lastname</span>
      <section className={styles['lmau-author-container']}>
        <img className={styles['lmau-author-avatar']} src='https://www.thelegendofheroes.com/tocs3/sp/img/chara/bust/laura.png'></img>
        <div className={styles['lmau-author-identity']}>
          <p id={styles['lmau-author-name']}>Journey To Valley</p>
          <p id={styles['lmau-author-date']}>Posted:&nbsp; Sept. 20, 2020</p>
        </div>
        <div className={styles['lmau-author-social-media']}>
          <a target='_blank' href='https://www.facebook.com/Journey-to-Valley-109788187490460/'>
            <img id={styles['socmed-block-fb']} src={'/images/homepage/fb_icon_grey.svg'} />
          </a>
          <a target='_blank' href='https://www.linkedin.com/company/68686498/admin/'>
            <img id={styles['socmed-block-ln']} src={'/images/homepage/linkedin_icon_grey.svg'} />
          </a>
          <a target='_blank' href='https://twitter.com/ValleyJourney'>
            <img id={styles['socmed-block-tw']} src={'/images/homepage/twitter_icon_grey.svg'} />
          </a>
          <a target='_blank' href='https://www.instagram.com/journeytovalley/'>
            <img id={styles['socmed-block-ig']} src={'/images/homepage/ig_icon_grey.svg'} />
          </a>
          <a target='_blank' href='https://www.instagram.com/journeytovalley/'>
            <img src='/images/homepage/email-icon-grey.svg'></img>
          </a>
        </div>
      </section>
      <section className={styles['lmau-description-container']}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum viverra nunc tempor, sit tempus metus interdum enim. Ultricies
          porttitor rutrum ut morbi. Viverra semper velit sem cras ut et dictum neque. Velit lectus ut sed rhoncus.
        </p>
        <p>
          Ac id velit aliquet porttitor amet quisque. Consectetur aliquet felis viverra tincidunt egestas sollicitudin diam cras. Justo,
          erat aliquam mauris pharetra. Tellus quam arcu libero urna pellentesque orci. Odio urna donec netus accumsan consectetur diam mi
          consectetur gravida. Sollicitudin dui gravida sem pellentesque id. Quam faucibus risus, eu sed scelerisque sit.
        </p>
      </section>
    </div>
  );
};

export default learnMoreAboutUs;
