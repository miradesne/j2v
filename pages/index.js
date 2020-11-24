import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import LatestStories from '../components/latest-stories'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
    <Layout home>
    </Layout>

    <LatestStories />
    </>
  )
}
