import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostAndMorePosts } from '../../lib/posts-graphql';
import ArticleBody from '../../components/single-story/article-body';
import CommentSection from '../../components/single-story/comment-section';
import OtherStories from '../../components/single-story/other-stories';
import styles from './single-article.module.css';
import { getAllPostsForHome } from '../../lib/posts-graphql';
import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;

export default function Post({ postData, wordPressPosts }) {
  const [gototopStyle, setGototopStyle] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 750) setGototopStyle(styles['gototop-show']);
      if (window.scrollY < 750) setGototopStyle('');
    });
  }, [gototopStyle]);
  return (
    <Layout home={false}>
      <img
        onClick={() => scroll.scrollToTop({ duration: 1000 })}
        className={`${styles.gototop} ${gototopStyle}`}
        src='/images/single-story/gototop.svg'
        alt='go to top'></img>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <ArticleBody postData={postData} />
      <CommentSection />
      <OtherStories wordPressPosts={wordPressPosts.edges} />
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
  const wordPressPosts = await getAllPosts();
  const postData = data.post;
  return {
    props: {
      postData,
      wordPressPosts,
    },
  };
}
