import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import LatestStories from '../components/latest-stories'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
    <Layout home>

      <section className={utilStyles.headingMd}>
        <p>We bring you the stories of people around the world who dared
        trying against their perceived odds and made it to the top companies.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href = "/stories-list"><a>our stories list</a></Link>.)
        </p>
      </section>
    </Layout>

    <LatestStories />
    </>
  )
}
