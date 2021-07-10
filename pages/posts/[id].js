import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostAndMorePosts } from '../../lib/posts-graphql';
import ArticleBody from '../../components/single-story/article-body';
import CommentSection from '../../components/single-story/comment-section';
import OtherStories from '../../components/single-story/other-stories';
import styles from './single-article.module.css';

export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <ArticleBody postData={postData} />
      <CommentSection />
      <OtherStories />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.id);
  const postData = data.post;
  return {
    props: {
      postData,
    },
  };
}
