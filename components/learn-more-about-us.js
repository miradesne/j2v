import React from 'react';
import styles from './learn-more-about-us.module.css';
import AuthorSection from './author-section';

const learnMoreAboutUs = () => {
  return (
    <div className={styles['lmau-container']}>
      <h1 className={styles['lmau-title']}>Learn More About Us</h1>
      <img
        className={styles['lmau-image']}
        src='https://www.ruparupa.com/blog/wp-content/uploads/2020/03/Tips-Bangun-Kekompakan-Tim-Selama-Masa-Work-From-Home.jpg'
      />
      <span className={styles['lmau-image-caption']}>Image/Photo: Firstname Lastname</span>
      <AuthorSection imageSource='https://store.playstation.com/store/api/chihiro/00_09_000/container/CL/es/19/UP1023-CUSA07718_00-AV00000000000032/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000' />
      <section className={styles['lmau-description-container']}>
        <p>
          Journey to Valley is a career blog and an online community. Regardless of race, nationality, gender, and age, if you are a
          software engineer or on your way to becoming one, then you are in the right place!
        </p>
        <p>
          We are a group of software engineers who love life and inspire people to try making it into the tech industry. Looking back to the
          earlier part of our journey, there were things we wished someone with exposure to the industry would have told us. We know that a
          lot of aspiring software engineers are going through the same experience we did, and would benefit from the stories we share.
        </p>
        <p>
          We share authentic information and tips about internships, interviews, work, communication, and so on from interviewing veterans
          in the industry. Please feel free to express your opinions in the comments. We value everyone’s thoughts and feedback as we create
          an equal, encouraging, sustainable, and respectful online community. (Privacy Policy and Terms of Use)
        </p>
        <p>We highly recommend subscribing to our latest stories. Whenever there’s an update, we’ll inform you by email first.</p>
        <p>
          If you are a professional in the tech industry, now is the time to share your inspiring personal stories and work experiences. If
          you want to share your experience/story on our blog, please contact us HERE.
        </p>
        <p>Thank you so much for reading!</p>
      </section>
    </div>
  );
};

export default learnMoreAboutUs;
