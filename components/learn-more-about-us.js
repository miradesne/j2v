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
