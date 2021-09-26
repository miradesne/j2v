import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Homepage from '../components/homepage'
import utilStyles from '../styles/utils.module.css'
import { getAllPostsForHome } from '../lib/posts-graphql';

export default function Home({ wordPressPosts: { edges } }) {
  return (
    <>
    <Layout home>
        <Homepage posts={edges} />
    </Layout>
    </>
  )
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
