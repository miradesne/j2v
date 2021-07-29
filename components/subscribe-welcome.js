import React from 'react';
import styles from './subscribe-welcome.module.css';

const SubscribeWelcome = () => {
  return (
    <div id={styles['subscribe-welcome-container']}>
      <img id={styles['subscribe-welcome-cross']} src='images/homepage/cross.svg'></img>
      <h3 id={styles['subscribe-welcome-header']}>Welcome To Our Community</h3>
      <img id={styles['subscribe-welcome-check-mark']} src='/images/homepage/icon-check-mark.svg'></img>
      <div id={styles['subscribe-welcome-followus-container']}>
        <span />
        <p>Follow Us</p>
        <span />
      </div>
      <div id={styles['subscribe-welcome-icons-container']}>
        <img src={'/images/homepage/fb_icon_blackyellow.svg'}></img>
        <img src={'/images/homepage/linkedin_icon_blackyellow.svg'}></img>
        <img src={'/images/homepage/twitter_icon_blackyellow.svg'}></img>
        <img src={'/images/homepage/ig_icon_blackyellow.svg'}></img>
      </div>
    </div>
  );
};

export default SubscribeWelcome;
