import React from 'react';
import styles from './article-body.module.css';
import { DateTime } from 'luxon';

const ArticleBody = ({ postData }) => {
  return (
    <article className={styles['article-container']}>
      <h1 className={styles['article-head-title']}>{postData.title}</h1>
      <h2 className={styles['article-sub-title']}>Drinking without getting drunk is, I mean what's the point of drinking at all?</h2>
      <div className={styles['article-main-image']}>
        <img src='https://lh3.googleusercontent.com/proxy/zkSoqsp3zc0T_eAK5BeM6vwQ-1AZZy1oJYcw9qNOZfCAMTYWNVzscT5Mb5lIOOleCZK7Wd8IorkU9X3Ya-BGTD4LYp53wyAlGOksKBnpOgRigiCv'></img>
        <span className={styles['image-source']}>Image/Photo Firstname Lastname</span>
      </div>
      <div className={styles['article-author-container']}>
        <img className={styles['article-author-avatar']} src='https://www.thelegendofheroes.com/tocs3/sp/img/chara/bust/laura.png'></img>
        <div className={styles['article-author-identity']}>
          <p id={styles['article-author-name']}>By Firstname Lastname</p>
          <p id={styles['article-author-date']}>Posted:&nbsp;{DateTime.fromISO(postData.date).toLocaleString()}</p>
        </div>
        <div className={styles['article-author-social-media']}>
          <img src='/images/homepage/fb_icon_grey.svg'></img>
          <img src='/images/homepage/linkedin_icon_grey.svg'></img>
          <img src='/images/homepage/twitter_icon_grey.svg'></img>
          <img src='/images/homepage/ig_icon_grey.svg'></img>
          <img src='/images/homepage/share_icon.svg'></img>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  );
};

export default ArticleBody;
