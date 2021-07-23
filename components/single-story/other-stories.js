import React from 'react';
import styles from './other-stories.module.css';
import storyCardStyles from '../story-card-list.module.scss';
import { COLORS } from '../constants';
import Img from '../image';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

const OtherStories = ({ wordPressPosts }) => {
  let colors = [COLORS.yellow, COLORS.teal, COLORS.blue, COLORS.pink, COLORS.orange];
  return (
    <div className={styles['other-stories-container']}>
      <h2>You might also like...</h2>
      {wordPressPosts.map(({ node }, index) => {
        if (index < 3) {
          let colorStyle = { '--shadow-color': colors[index % colors.length] };
          return (
            <div className={storyCardStyles.card} style={colorStyle} key={node.slug}>
              <div className={storyCardStyles.meta}>
                <div className={storyCardStyles.photo}>
                  <Img layout='fill' className={storyCardStyles.img} src={node.featuredImage.node.sourceUrl} />
                </div>
              </div>
              <div className={storyCardStyles.description}>
                <div className={storyCardStyles.title}>
                  <Link href={`/posts/${node.slug}`}>
                    <a>{node.title}</a>
                  </Link>
                </div>
                <small className={`${utilStyles.lightText} ${storyCardStyles.date}`}>
                  Date: <Date dateString={node.date} />
                </small>
                <div className={storyCardStyles.hr}></div>
                <div className={storyCardStyles.author}>
                  <div className={storyCardStyles.name}>By Firstname Lastname</div>
                  <div className={`${storyCardStyles.position} ${utilStyles.lightText}`}>Software Engineer @ Google</div>
                </div>
              </div>
              <div className={storyCardStyles.cardPadding}></div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default OtherStories;
