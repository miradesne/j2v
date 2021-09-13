import { useState, useEffect } from 'react';
import styles from './homepage.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { Element } from 'react-scroll';
import WelcomeToOurCommunity from './subscribe-welcome';

export default function Homepage({ posts }) {
  const [subscribeValue, setSubscribeValue] = useState('');
  const [subscribeError, setSubscribeError] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [submitIsValid, setSubmitIsValid] = useState(true);
  const [shakeStyle, setShakeStyle] = useState(null);

  const onSubscribeInputHandler = event => {
    setEmailIsValid(true);
    const inputValue = event.target.value;
    const regexEmail = /^\S+@\S+\.\S+$/.test(inputValue);
    setSubscribeError('');
    if (!regexEmail && inputValue) {
      setSubscribeError('Ooops... Please input a valid email address');
      setEmailIsValid(false);
    }
    setSubscribeValue(inputValue);
  };

  const onSubmitFormHandler = event => {
    event.preventDefault();
    setSubmitIsValid(true);
    if (!emailIsValid || !subscribeValue) {
      setSubmitIsValid(false);
      setShakeStyle(`${styles['shaking']}`);
    }
    document.querySelector('.subscribe-to-our-latest-stories-input').focus();
  };
  useEffect(() => {
    setShakeStyle(null);
  }, [subscribeValue]);

  return (
    <>
      <Head>
        <title>Journey To Valley</title>
      </Head>
      <div id={styles['home-journey-to-valley-row']} className={styles['home-flex']}>
        <h1>Journey to Valley</h1>
      </div>

      <div id={styles['home-we-bring-you-row']} className={styles['home-flex']}>
        <h1>
          We bring you the stories of people around the world who dared trying against their perceived odds and made it to the top
          companies.
        </h1>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <WelcomeToOurCommunity></WelcomeToOurCommunity>
      </div> */}
      <figure id={styles['home-world']}>
        <img src='images/homepage/front_pic-1.svg' alt='home-world' />
      </figure>

      <Link href='/stories-list'>
        <button className={styles['home-explore-button']}>Start Reading</button>
      </Link>

      <div id={styles['home-our-latest-stories-first']} className={styles['home-our-latest-stories']}>
        <div className={`${styles['home-our-latest-stories-column']} ${styles['home-our-latest-stories-column-left']}`}>
          <div className={styles['home-our-latest-stories-card-container']} id={styles['home-our-latest-stories-card-container-pink']}>
            <img className={styles['home-our-latest-stories-card-quote']} src='/images/homepage/pink-quote.svg'></img>
            <div className={styles['home-our-latest-stories-card-content']}>
              <div className={styles['home-our-latest-stories-card-story-quote']}>
                "{posts[0].node.j2vPostsCustomFields.customQuote}"
              </div>
              <hr />
              <div className={styles['home-our-latest-stories-card-author']}>
                <img
                  className={styles['home-our-latest-stories-card-author-avatar']}
                  id={styles['home-our-latest-stories-card-author-avatar-pink']}
                  src='images/Ellipse-52.webp'></img>
                <div className={styles['home-our-latest-stories-card-author-identity']}>
                  <div className={styles['home-our-latest-stories-card-author-identity-name']}>
                    <strong>{posts[0].node.j2vPostsCustomFields.customAuthorFirstname} {posts[0].node.j2vPostsCustomFields.customAuthorLastname}</strong>
                  </div>
                  <div className={styles['home-our-latest-stories-card-author-identity-job']}>
                    <span>{posts[0].node.j2vPostsCustomFields.customAuthorOccupation}</span>
                    <span> @ {posts[0].node.j2vPostsCustomFields.customAuthorCompany}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id={styles['home-our-latest-stories-big-text']}>
          Our
          <br />
          Latest
          <br />
          Stories
        </div>
      </div>

      <div id={styles['home-our-latest-stories-second']} className={styles['home-our-latest-stories']}>
        <div className={`${styles['home-our-latest-stories-column']} ${styles['home-our-latest-stories-column-left']}`}>
          <div className={styles['home-our-latest-stories-card-container']} id={styles['home-our-latest-stories-card-container-teal']}>
            <img className={styles['home-our-latest-stories-card-quote']} src='/images/homepage/teal-quote.svg'></img>
            <div className={styles['home-our-latest-stories-card-content']}>
              <div className={styles['home-our-latest-stories-card-story-quote']}>
                "{posts[1].node.j2vPostsCustomFields.customQuote}"
              </div>
              <hr />
              <div className={styles['home-our-latest-stories-card-author']}>
                <img
                  className={styles['home-our-latest-stories-card-author-avatar']}
                  id={styles['home-our-latest-stories-card-author-avatar-teal']}
                  src='images/Ellipse-52.webp'></img>
                <div className={styles['home-our-latest-stories-card-author-identity']}>
                  <div className={styles['home-our-latest-stories-card-author-identity-name']}>
                    <strong>{posts[1].node.j2vPostsCustomFields.customAuthorFirstname} {posts[1].node.j2vPostsCustomFields.customAuthorLastname}</strong>
                  </div>
                  <div className={styles['home-our-latest-stories-card-author-identity-job']}>
                    <span>{posts[1].node.j2vPostsCustomFields.customAuthorOccupation}</span>
                    <span> @ {posts[1].node.j2vPostsCustomFields.customAuthorCompany}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['home-our-latest-stories-column']} ${styles['home-our-latest-stories-column-right']}`}>
          <div className={styles['home-our-latest-stories-card-container']} id={styles['home-our-latest-stories-card-container-orange']}>
            <img className={styles['home-our-latest-stories-card-quote']} src='/images/homepage/orange-quote.svg'></img>
            <div className={styles['home-our-latest-stories-card-content']}>
              <div className={styles['home-our-latest-stories-card-story-quote']}>
                "{posts[2].node.j2vPostsCustomFields.customQuote}"
              </div>
              <hr />
              <div className={styles['home-our-latest-stories-card-author']}>
                <img
                  className={styles['home-our-latest-stories-card-author-avatar']}
                  id={styles['home-our-latest-stories-card-author-avatar-orange']}
                  src='images/Ellipse-52.webp'></img>
                <div className={styles['home-our-latest-stories-card-author-identity']}>
                  <div className={styles['home-our-latest-stories-card-author-identity-name']}>
                    <strong>{posts[2].node.j2vPostsCustomFields.customAuthorFirstname} {posts[2].node.j2vPostsCustomFields.customAuthorLastname}</strong>
                  </div>
                  <div className={styles['home-our-latest-stories-card-author-identity-job']}>
                    <span>{posts[2].node.j2vPostsCustomFields.customAuthorOccupation}</span>
                    <span> @ {posts[2].node.j2vPostsCustomFields.customAuthorCompany}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id={styles['home-our-latest-stories-more-row']}>
        <Link href='/stories-list'>
          <a>
            <div id={styles['home-our-latest-stories-more']}>Read More</div>
          </a>
        </Link>
      </div>

      <Element id='subscribe-section' name='subscribe-section'>
        <div id={styles['subscribe-to-our-latest-stories']}>
          {/* <img id={styles['subscribe-to-our-latest-stories-background']} src={'/images/homepage/subscribe_aio.svg'}></img> */}
          <div id={styles['subscribe-to-our-latest-stories-content']}>
            <div id={styles['subscribe-to-our-latest-stories-sub-title']}>
              <h2>Subscribe To</h2>
              <h2>Our Latest Stories</h2>
            </div>
            <div id={styles['subscribe-to-our-latest-stories-paragraph-input-container']}>
              <div id={styles['subscribe-to-our-latest-stories-paragraph']}>
                <p>We are passionate to share real and valuable personal experiences. Unsubscribe anytime. It's free!</p>
              </div>
              <div id={styles['subscribe-to-our-latest-stories-input-container']}>
                <form className={shakeStyle} onSubmit={onSubmitFormHandler} style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    id={styles['subscribe-to-our-latest-stories-input']}
                    style={{ color: emailIsValid ? 'black' : 'red' }}
                    name='subscriber-email' //Feel free to change the 'name' value to store the email data for the backend
                    placeholder={'Enter your email here...'}
                    value={subscribeValue}
                    onChange={onSubscribeInputHandler}
                    className='subscribe-to-our-latest-stories-input'
                  />
                  <button type='submit' id={styles['subscribe-to-our-latest-stories-subscribe']}>
                    Subscribe
                  </button>
                </form>
              </div>
              <span id={`${styles['subscribe-error-message']}`}>{subscribeError}</span>
            </div>
          </div>
          <div id={styles['subscribe-to-our-latest-stories-bottom-ornaments']}>
            <img id={styles['subscribe-to-our-latest-stories-megaphone']} src={'/images/homepage/megaphone-subscribe.svg'}></img>
            <img id={styles['subscribe-to-our-latest-stories-ornament-icons']} src={'/images/homepage/ornament-icons.svg'}></img>
          </div>
          <div id={styles['subscribe-to-our-latest-stories-bottom-ornaments-phone']}>
            <img src={'/images/homepage/subscribe-phone-illustration.svg'} alt='phone ornament'></img>
          </div>
        </div>
      </Element>
    </>
  );
}

export async function getStaticProps() {
  let wordPressPosts = await getAllPostsForHome();
  // if (!wordPressPosts) wordPressPosts = { edges: [] };
  return {
    props: {
      wordPressPosts,
    },
  };
}
