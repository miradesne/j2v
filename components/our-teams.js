import React from 'react';
import styles from './our-teams.module.css';
import Link from 'next/link';

const ourTeams = () => {
  return (
    <section className={styles['our-teams-container']}>
      <h2>Our Team</h2>
      <div className={styles['our-teams-row']}>
        <div className={styles['our-teams-member']}>
          <img
            className={styles['our-teams-avatar']}
            src='https://i.guim.co.uk/img/media/513976d50736695ee8bd5014175e007f9980531f/0_289_2980_1788/master/2980.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=77863ec7b2622437668af3ff9ecd7ae6'
            alt='avatar'
            id={styles['our-team-member-1']}
          />
          <span className={styles['our-teams-name']}>Joey Tribbiani</span>
          <span className={styles['our-teams-job-role']}>Actor</span>
          <span className={styles['our-teams-company']}>at Facebook</span>
        </div>
        <div className={styles['our-teams-member']}>
          <img
            className={styles['our-teams-avatar']}
            src='https://pbs.twimg.com/profile_images/1257292276209979392/ELX3_1oY.jpg'
            alt='avatar'
            id={styles['our-team-member-2']}
          />
          <span className={styles['our-teams-name']}>Chandler Bing</span>
          <span className={styles['our-teams-job-role']}>Transponster (or whatever)</span>
          <span className={styles['our-teams-company']}>at Facebook</span>
        </div>
      </div>
      <div className={styles['our-teams-row']}>
        <div className={styles['our-teams-member']}>
          <img
            className={styles['our-teams-avatar']}
            src='https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/5ebc4d0175e461001e95d26c.jpg'
            alt='avatar'
            id={styles['our-team-member-3']}
          />
          <span className={styles['our-teams-name']}>Rachel Green</span>
          <span className={styles['our-teams-job-role']}>Buyer's Assistant</span>
          <span className={styles['our-teams-company']}>at Facebook</span>
        </div>
        <div className={styles['our-teams-member']}>
          <img
            className={styles['our-teams-avatar']}
            src='https://images.squarespace-cdn.com/content/v1/5a6fc8452278e782e8ee0133/1543791656154-YTIXFN962W7YW24LWZJJ/Phoebe+Buffay.jpg?format=500w'
            alt='avatar'
            id={styles['our-team-member-4']}
          />
          <span className={styles['our-teams-name']}>Phoebe Buffay</span>
          <span className={styles['our-teams-job-role']}>Masseuse</span>
          <span className={styles['our-teams-company']}>at Facebook</span>
        </div>
      </div>
      <div className={styles['our-teams-back-button-container']}>
        <Link href='/'>
          <button className={styles['our-teams-back-button']}>Back</button>
        </Link>
      </div>
    </section>
  );
};

export default ourTeams;
