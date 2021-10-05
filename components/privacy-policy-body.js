import React from 'react';
import Link from 'next/link';
import styles from './privacy-policy-body.module.css';
import AuthorSection from './author-section';

const privacyPolicyBody = () => {
  return (
    <div className={styles['privacy-policy-container']}>
      <section className={styles['privacy-policy-intro']}>
        <h1 className={styles['privacy-policy-title']}>Privacy Policy and Terms</h1>
        <h2 className={styles['privacy-policy-subtitle']}>
          We wish to create a healthy and safe environment for all our community members.{' '}
        </h2>
        <div className={styles['privacy-policy-section-image']}>
          <img src='https://www.scarymommy.com/wp-content/uploads/2021/06/04/friends-central-perk-art.jpg' alt='section-image' />
          <span>Image/Photo: Firstname Lastname</span>
        </div>
        <AuthorSection imageSource='https://pbs.twimg.com/profile_images/1336624174870089731/seW5pxhp_400x400.jpg' />
      </section>
      <section className={styles['privacy-policy-content']}>
        <div className={styles['privacy-policy-copywriting']}>
          <p>
            <strong>PRIVACY</strong>: We will never disclose or sell your email address or any of your data from this site. We do highly
            welcome posts and community interaction, and registering is simply part of the posting system. DISCLAIMER: Financial Samurai
            exists to thought provoke and learn from the community. Your decisions are yours alone and we are in no way responsible for your
            actions. Stay on the righteous path and think long and hard before making any financial transaction!
          </p>
          <p>
            Ut dui et facilisis consequat quam ut. Erat suspendisse hendrerit porta pharetra, id in. Consectetur purus sit placerat mattis.
            Nulla in nec diam, auctor velit. Egestas cras erat enim ultrices sed risus, facilisis. Id cras pulvinar cursus et vestibulum
            dolor, donec a eleifend. Volutpat, elit sed mauris mattis felis pulvinar mauris, nisl. Consectetur consectetur malesuada donec
            tincidunt ipsum, nisi elementum faucibus vel. Euismod eget est, eu velit. Sit tempor blandit consequat magna proin nulla sed in.
            Imperdiet blandit et auctor lectus tristique blandit gravida facilisis morbi.{' '}
          </p>
          <p>
            Vitae viverra elit nisi, morbi tincidunt nisl faucibus tristique. Quam eu risus curabitur donec nunc viverra. Quis dictum hac
            fringilla feugiat tempor. Turpis habitant leo habitant id tincidunt lacus. Odio nulla facilisi habitant id netus aliquet
            curabitur erat. Luctus nunc, at euismod leo metus.{' '}
          </p>
          <p>
            Egestas aliquet ut mattis gravida nunc. Magna rhoncus, nullam morbi orci non. Maecenas amet, id felis pellentesque blandit odio
            maecenas lectus purus. Dignissim vulputate accumsan in ligula integer tincidunt. Rhoncus pretium elit posuere sit tempor
            phasellus. Quisque suspendisse et aliquam odio tempor, viverra sit magna.{' '}
          </p>
        </div>
        <div className={styles['home-button']}>
          <Link href='/'>
            <button>Home</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default privacyPolicyBody;
