import React from 'react';
import styles from './author-section.module.css';

const AuthorSection = props => {
  return (
    <div className={styles['author-container']}>
      <div className={styles['author-avatar-identity']}>
        <img className={styles['author-avatar']} src={props.imageSource} />
        <div className={styles['author-identity']}>
          <p id={styles['author-name']}>By {`${props.firstName || 'Firstname Lastname'} ${props.lastName || ''} `}</p>
          <p id={styles['author-date']}>Posted: {props.postingDate || 'Sept. 20, 2020'}</p>
        </div>
      </div>
      <div className={styles['author-social-media']}>
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
        <img src='/images/homepage/share_icon.svg'></img>
      </div>
    </div>
  );
};

export default AuthorSection;
