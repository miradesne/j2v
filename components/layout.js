import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import HeaderNavBar from './header-nav-bar';
import Footer from './footer';

const name = 'Journey to Valley';
export const siteTitle = 'Next.js J2V Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.toplevel}>
      <div className={styles.container}>
        <Head>
          <link rel='preload' href='/fonts/Roobert/Roobert-Regular.otf' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/Roobert/Roobert-Bold.otf' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/Life/Life-Regular.otf' as='font' crossOrigin='' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content='Learn how to build a personal website using Next.js' />
          <meta
            property='og:image'
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name='og:title' content={siteTitle} />
          <meta name='twitter:card' content='summary_large_image' />
          <script src='https://jam.dev/jam.js'></script>
          <script>Jam.init('ultimate-slug-71')</script>
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Link href='/'>
                <img src='https://journeytovalley.org/wp-content/uploads/2020/09/logo.png' className={`${styles.headerImage}`} alt={name} />
              </Link>
              <HeaderNavBar home />
            </>
          ) : (
            <>
              <Link href='/'>
                <img src='https://journeytovalley.org/wp-content/uploads/2020/09/logo.png' className={`${styles.headerImage}`} alt={name} />
              </Link>
              <HeaderNavBar home={false} />
            </>
          )}
        </header>
        <main>{children}</main>
      </div>

      <footer id={styles['footer-toplevel']}>{home ? <Footer home /> : <Footer home={false} />}</footer>
    </div>
  );
}
