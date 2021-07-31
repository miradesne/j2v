import React from 'react';
import styles from './comment-section.module.css';
import Link from 'next/link';

const CommentSection = () => {
  return (
    <div className={styles['comment-section-container']}>
      <div className={styles['social-icon-group']}>
        <div className={styles['social-icon-left']}>
          <div className={styles['social-icon-cheers']}>
            <img src='/images/single-story/toast-1.svg'></img>
            <span>62 cheers</span>
          </div>
          <div className={styles['social-icon-chats']}>
            <img src='/images/single-story/chat-1.svg'></img>
            <span>36 responses</span>
          </div>
        </div>
        <div className={styles['social-icon-social-media']}>
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
      <hr></hr>
      <div className={styles['comment-section-input']}>
        <div className={styles['comment-section-input-head']}>
          <h2>Share your thoughts</h2>
          <img src='/images/single-story/community-guidelines.svg'></img>
        </div>
        <form>
          <div className={styles['comment-section-input-author']}>
            <input type='text' name='name' placeholder='Your Name'></input>
            <input type='email' name='email' placeholder='Email'></input>
          </div>
          <div className={styles['comment-section-input-message']}>
            <textarea rows='5' name='comment' placeholder='What are your thoughts?'></textarea>
          </div>
          <div className={styles['comment-section-submit-button-container']}>
            <button type='button' className={styles['comment-section-submit-button']}>
              Submit
            </button>
          </div>
        </form>

        <hr></hr>

        <div className={styles['comment-section-comments-cluster']}>
          <div className={styles['comment-section-comments-card']} id={styles['comment-section-comments-card-1']}>
            <div className={styles['comment-section-comments-card-meta']}>
              <div className={styles['comment-section-comments-card-author']}>
                <img src='/images/single-story/User01_Blue.svg' alt='comments-avatar' />
                <p>Firstname Lastname</p>
              </div>
              <div className={styles['comment-section-comments-card-date']}>Posted June 30th, 2021</div>
            </div>
            <div className={styles['comment-section-comments-card-message']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo, pulvinar suspendisse id blandit. Tellus nisl quis cras dolor
              dui sem. Euismod tempus dictum nunc nunc euismod. Consectetur id porttitor sit elementum justo, quis mauris. Diam id interdum
              habitant faucibus. Vivamus dolor habitant tincidunt tortor orci, consequat.
            </div>
          </div>

          <div className={styles['comment-section-comments-card']} id={styles['comment-section-comments-card-2']}>
            <div className={styles['comment-section-comments-card-meta']}>
              <div className={styles['comment-section-comments-card-author']}>
                <img src='/images/single-story/User01_Pink.svg' alt='comments-avatar' />
                <p>Firstname Lastname</p>
              </div>
              <div className={styles['comment-section-comments-card-date']}>Posted June 30th, 2021</div>
            </div>
            <div className={styles['comment-section-comments-card-message']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo, pulvinar suspendisse id blandit. Tellus nisl quis cras dolor
              dui sem. Euismod tempus dictum nunc nunc euismod. Consectetur id porttitor sit elementum justo, quis mauris. Diam id interdum
              habitant faucibus. Vivamus dolor habitant tincidunt tortor orci, consequat.
            </div>
          </div>

          <div className={styles['comment-section-comments-card']} id={styles['comment-section-comments-card-3']}>
            <div className={styles['comment-section-comments-card-meta']}>
              <div className={styles['comment-section-comments-card-author']}>
                <img src='/images/single-story/User01_Orange.svg' alt='comments-avatar' />
                <p>Firstname Lastname</p>
              </div>
              <div className={styles['comment-section-comments-card-date']}>Posted June 30th, 2021</div>
            </div>
            <div className={styles['comment-section-comments-card-message']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo, pulvinar suspendisse id blandit. Tellus nisl quis cras dolor
              dui sem. Euismod tempus dictum nunc nunc euismod. Consectetur id porttitor sit elementum justo, quis mauris. Diam id interdum
              habitant faucibus. Vivamus dolor habitant tincidunt tortor orci, consequat.
            </div>
          </div>
        </div>

        <div className={styles['back-to-stories-list']}>
          <Link href='/stories-list'>
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
