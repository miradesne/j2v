import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import HeaderNavBar from './header-nav-bar'


const name = 'Journey to Valley'
export const siteTitle = 'Next.js J2V Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Roobert/Roobert-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="https://journeytovalley.org/wp-content/uploads/2020/09/logo.png"
              className={`${styles.headerImage}`}
              alt={name}
            />
            <HeaderNavBar />
          </>
        ) : (
            <>
            <Link href="/">
              <a>
                <img
                  src="https://journeytovalley.org/wp-content/uploads/2020/09/logo.png"
                  className={`${styles.headerImage}`}
                  alt={name}
                />
              </a>
            </Link>
            <HeaderNavBar />
            </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
