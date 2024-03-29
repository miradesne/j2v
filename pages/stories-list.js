import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { getAllPostsForHome } from '../lib/posts-graphql';
import utilStyles from '../styles/utils.module.css';
import storyListPageStyles from '../components/story-list-page.module.css';
import StoryCardList from '../components/story-card-list';

export default function StoriesList({ localPosts, wordPressPosts: { edges } }) {
  return (
    <Layout home={false}>
      <Head>
        <title>Stories List</title>
      </Head>
      <div className={`${utilStyles.latestStoriesBackground} ${storyListPageStyles.latestStoriesBackground}`}></div>
      <StoryCardList posts={edges} />
    </Layout>
  );
}

export async function getStaticProps() {
  const localPosts = getSortedPostsData();
  let wordPressPosts = await getAllPostsForHome();
  // if (!wordPressPosts) wordPressPosts = { edges: [] };
  return {
    props: {
      localPosts,
      wordPressPosts,
    },
  };
}
