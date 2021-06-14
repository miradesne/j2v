import styles from './homepage.module.css';
import Link from 'next/link';

export default function Homepage() {
  return (
    <>
      <div id={styles['home-journey-to-valley-row']} className={styles['home-flex']}>
        <h1>Journey to Valley</h1>
      </div>

      <div id={styles['home-we-bring-you-row']} className={styles['home-flex']}>
        <h1>
          We bring you the stories of people around the world who dared trying against their perceived odds and made it to the top
          companies.
        </h1>
      </div>

      <figure id={styles['home-world']}>
        <img src='images/homepage/front_pic-1.webp' alt='' />
      </figure>

      <div id={styles['home-downarrow']} className={styles['home-flex']}></div>

      {/* <div id={styles['home-our-goals-row']} className={styles['home-flex']}>
        <div id={styles['home-our-goals-grid-container']}>
          <div id={styles['home-our-goals-grid']}>
            <div id={styles['home-our-goals-inside']}>
              <div id={styles['home-our-goals-flexbox']}>
                <h1>
                  Our
                  <br /> Goals
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div id={styles['home-checklist-grid-container']}>
          <div className={styles['div-list']}>
            <div className={styles['checkbox-list']}>
              <img src='images/homepage/Icon-check-mark.webp' alt='' />
            </div>
            <div className={styles['text-list']}>
              To share real <span className={styles['orange-text-color']}>career</span> experience.
            </div>
          </div>
          <div className={styles['div-list']}>
            <div className={styles['checkbox-list']}>
              <img src='images/homepage/Icon-check-mark.webp' alt='' />
            </div>
            <div className={styles['text-list']}>
              To provide creative <span className={styles['pink-text-color']}>inspiration</span>.
            </div>
          </div>
          <div className={styles['div-list-last']}>
            <div className={styles['checkbox-list']}>
              <img src='images/homepage/Icon-check-mark.webp' alt='' />
            </div>
            <div className={styles['text-list']}>
              To <span className={styles['yellow-text-color']}>help</span> each other.
            </div>
          </div>
        </div>
      </div> */}

      <div id={styles['home-our-latest-stories-first']} className={styles['home-our-latest-stories']}>
        <div className={`${styles['home-our-latest-stories-column']} ${styles['home-our-latest-stories-column-left']}`}>
          <div className={`${styles['home-our-latest-stories-block']} ${styles['bg-quote-pink']}`}>
            <div className={styles['home-our-latest-stories-grid']}>
              <div className={styles['home-our-latest-stories-inside']}>
                <div className={styles['home-our-latest-stories-flexbox']}>
                  <div className={styles['home-our-latest-stories-quote']}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                  </div>
                  <hr />
                  <div className={styles['home-our-latest-stories-identity']}>
                    <div className={styles['home-our-latest-stories-pic']}>
                      <img src='images/Ellipse-52.webp' />
                    </div>
                    <div className={styles['home-our-latest-stories-id-text']}>
                      <div className={styles['home-our-latest-stories-name']}>Firstname Lastname</div>
                      <div className={styles['home-our-latest-stories-job']}>Software Engineer @ Facebook</div>
                    </div>
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
          <div className={`${styles['home-our-latest-stories-block']} ${styles['bg-quote-teal']}`}>
            <div className={styles['home-our-latest-stories-grid']}>
              <div className={styles['home-our-latest-stories-inside']}>
                <div className={styles['home-our-latest-stories-flexbox']}>
                  <div className={styles['home-our-latest-stories-quote']}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                  </div>
                  <hr />
                  <div className={styles['home-our-latest-stories-identity']}>
                    <div className={styles['home-our-latest-stories-pic']}>
                      <img src='images/Ellipse-52.webp' />
                    </div>
                    <div className={styles['home-our-latest-stories-id-text']}>
                      <div className={styles['home-our-latest-stories-name']}>Firstname Lastname</div>
                      <div className={styles['home-our-latest-stories-job']}>Software Engineer @ Facebook</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['home-our-latest-stories-column']} ${styles['home-our-latest-stories-column-right']}`}>
          <div className={`${styles['home-our-latest-stories-block']} ${styles['bg-quote-orange']}`}>
            <div className={styles['home-our-latest-stories-grid']}>
              <div className={styles['home-our-latest-stories-inside']}>
                <div className={styles['home-our-latest-stories-flexbox']}>
                  <div className={styles['home-our-latest-stories-quote']}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                  </div>
                  <hr />
                  <div className={styles['home-our-latest-stories-identity']}>
                    <div className={styles['home-our-latest-stories-pic']}>
                      <img src='images/Ellipse-52.webp' />
                    </div>
                    <div className={styles['home-our-latest-stories-id-text']}>
                      <div className={styles['home-our-latest-stories-name']}>Firstname Lastname</div>
                      <div className={styles['home-our-latest-stories-job']}>Software Engineer @ Facebook</div>
                    </div>
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

      <div id={styles['subscribe-to-our-latest-stories']}>
        <div id={styles['subscribe-to-our-latest-stories-left']}>
          <div id={styles['subscribe-to-our-latest-stories-sub-title']}>
            <h3>Subscribe To</h3>
            <h3>Our Latest Stories</h3>
          </div>
          <input
            id={styles['subscribe-to-our-latest-stories-input']}
            type='email'
            name='subscriber-email' //Feel free to change the 'name' value to store the email data for the backend
            placeholder={'Enter your email here...'}></input>
          <Link href='/stories-list'>
            <a id={styles['subscribe-to-our-latest-stories-more']}>Read More</a>
          </Link>
        </div>
        <div id={styles['subscribe-to-our-latest-stories-right']}>
          <img src={'/images/homepage/blog_image.svg'}></img>
        </div>
      </div>
    </>
  );
}
