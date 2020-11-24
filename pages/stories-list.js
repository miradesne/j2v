import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import storyCardStyles from '../components/story-card.module.scss'

export default function StoriesList({ allPostsData }) {
  return (
    <Layout home={false}>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={utilStyles.cardList}>
          {allPostsData.map(({ id, date, title }) => (
            <div className={storyCardStyles.card} key={id}>
              <div className={storyCardStyles.meta} >
                <div className={storyCardStyles.photo}>
                  <img src="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg" />
                </div>
              </div>
              <div className={storyCardStyles.description}>
                <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
