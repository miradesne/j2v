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

      {/* <div dangerouslySetInnerHTML={{ __html: postData.content }} /> */}
      <div className={styles['article-body-article']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto mollitia eos! Neque repellendus iusto earum blanditiis veniam
        quos expedita aliquam! Cum, minima veniam. Itaque perferendis beatae nulla libero placeat, repellat rerum tempora, numquam earum
        laboriosam quo exercitationem modi nesciunt ipsum odit corporis maiores ducimus? Pariatur totam laudantium quidem tempore odio
        accusantium cumque quae eaque illum eligendi saepe explicabo, et voluptates nisi quisquam! Quasi expedita voluptatem odio maxime
        tempore esse, fugit magni eligendi ducimus? Asperiores nam consequatur accusantium sit unde soluta voluptatibus dignissimos rem
        maxime numquam officia aperiam quia distinctio sed possimus velit iusto quibusdam, totam quasi! Molestias reprehenderit dolore
        cumque dignissimos similique voluptatibus perferendis error neque quisquam fugiat delectus, quaerat veniam quod adipisci esse
        asperiores sunt, rerum nostrum aliquid a magnam corporis tempora. Animi, omnis dolores eligendi ipsa autem assumenda perferendis
        accusamus laborum tenetur similique enim magnam culpa aliquid facere sequi id reprehenderit quia voluptatem iste voluptate aut!
        Ipsam quasi cum, totam quisquam unde quia, soluta dolor doloribus illum dolores quam repellat perferendis laboriosam vero, atque
        corporis mollitia accusantium amet aliquam corrupti quibusdam molestiae. Dolores molestiae qui ipsam neque perferendis facilis
        cupiditate modi alias cumque, in illo quasi impedit consequuntur non tempore a quae.
      </div>
    </article>
  );
};

export default ArticleBody;
