import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { getAllPostsForHome } from '../lib/posts-graphql'
import utilStyles from '../styles/utils.module.css'
import storyCardStyles from '../components/story-card.module.scss'

export default function StoriesList({ localPosts, wordPressPosts: {edges} }) {
  return (
    <Layout home={false}>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Lcoal Markdown Posts</h2>
        <div className={utilStyles.cardList}>
          {localPosts.map(({ id, date, title }) => (
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
                  Date: <Date dateString={date} />
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>WordPress Posts</h2>
        <div className={utilStyles.cardList}>
          {edges.map(({ node }) => (
            <div className={storyCardStyles.card} key={node.slug}>
              <div className={storyCardStyles.meta} >
                <div className={storyCardStyles.photo}>
                  <img src={ node.featuredImage.node.sourceUrl } />
                </div>
              </div>
              <div className={storyCardStyles.description}>
                <Link href={`/posts/${node.slug}`}>
                    <a>{node.title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  Date: <Date dateString={node.date} />
                </small>
                <div className={storyCardStyles.excerpt}>
                  {node.excerpt.replace(/(<([^>]+)>)/gi, "")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const localPosts = getSortedPostsData()
  const wordPressPosts = await getAllPostsForHome()
  return {
    props: {
      localPosts,
      wordPressPosts
    }
  }
}
