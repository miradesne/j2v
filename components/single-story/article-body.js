import React from 'react';
import styles from './article-body.module.css';
import { DateTime } from 'luxon';

const ArticleBody = ({ postData }) => {
  return (
    <article className={styles['article-container']}>
      <h1 className={styles['article-head-title']}>{postData.title}</h1>
      <h2 className={styles['article-sub-title']}>Drinking without getting drunk is, I mean what's the point of drinking at all?</h2>
      <div className={styles['article-main-image']}>
        <img src='https://wallpaperaccess.com/full/5463349.jpg' alt='article-avatar'></img>
        <span className={styles['image-source']}>Image/Photo Firstname Lastname</span>
      </div>
      <div className={styles['article-author-container']}>
        <img className={styles['article-author-avatar']} src='https://www.thelegendofheroes.com/tocs3/sp/img/chara/bust/laura.png'></img>
        <div className={styles['article-author-identity']}>
          <p id={styles['article-author-name']}>By Firstname Lastname</p>
          <p id={styles['article-author-date']}>
            Posted:&nbsp;{DateTime.fromISO(postData.date).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <div className={styles['article-author-social-media']}>
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
      {       // TODO: decide if we should use rendered or raw content. If raw, fix the null value returned by next js
        <div className={styles['article-body-article']} dangerouslySetInnerHTML={{ __html: postData.content }} /> }
    </article>
  );
};

export default ArticleBody;
