import Head from "next/head";
import Link from "next/link";
import Img from "../components/image";
import { COLORS } from "../components/constants";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { getAllPostsForHome } from "../lib/posts-graphql";
import utilStyles from "../styles/utils.module.css";
import storyCardStyles from "../components/story-card.module.scss";
import storyListPageStyles from "../components/story-list-page.module.css";

function LocalPostsSection({ posts }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Local Markdown Posts</h2>
      <div className={utilStyles.cardList}>
        {posts.map(({ id, date, title }) => (
          <div className={storyCardStyles.card} key={id}>
            <div className={storyCardStyles.meta}>
              <div className={storyCardStyles.photo}>
                <Img
                  layout="fill"
                  src="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"
                />
              </div>
            </div>
            <div className={storyCardStyles.description}>
              <Link href={`/posts/${id}`}>
                <a>
                  <div className={storyCardStyles.title}>{title}</div>
                </a>
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
  );
}

function WordPressPosts({ posts }) {
  let colors = [
    COLORS.yellow,
    COLORS.teal,
    COLORS.blue,
    COLORS.pink,
    COLORS.orange
  ];

  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <div
        className={`${utilStyles.heading2Xl} ${storyListPageStyles.heading}`}
      >
        Our Stories
      </div>
      <div className={`${utilStyles.bodyText} ${storyListPageStyles.subtitle}`}>
        Learn from others’ experiences and make your own success
      </div>
      <div className={utilStyles.cardList}>
        {posts.map(({ node }, index) => {
          let colorStyle = { "--shadow-color": colors[index % colors.length] };
          return (
            <div
              className={storyCardStyles.card}
              style={colorStyle}
              key={node.slug}
            >
              <div className={storyCardStyles.meta}>
                <div className={storyCardStyles.photo}>
                  <Img
                    layout="fill"
                    className={storyCardStyles.img}
                    src={node.featuredImage.node.sourceUrl}
                  />
                </div>
              </div>
              <div className={storyCardStyles.description}>
                <Link href={`/posts/${node.slug}`}>
                  <div className={storyCardStyles.title}>{node.title}</div>
                </Link>
                <small className={utilStyles.lightText}>
                  Date: <Date dateString={node.date} />
                </small>
                <div className={storyCardStyles.hr}></div>
                <div className={storyCardStyles.author}>
                  <div className={storyCardStyles.name}>Firstname Lastname</div>
                  <div className={storyCardStyles.position}>
                    Software Engineer @ Google
                  </div>
                </div>
              </div>
              <div className={storyCardStyles.cardPadding}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function StoriesList({ localPosts, wordPressPosts: { edges } }) {
  return (
    <Layout home={false}>
      <Head>Stories List</Head>
      <div
        className={`${utilStyles.latestStoriesBackground} ${storyListPageStyles.latestStoriesBackground}`}
      ></div>
      <WordPressPosts posts={edges} />
    </Layout>
  );
}

export async function getStaticProps() {
  const localPosts = getSortedPostsData();
  const wordPressPosts = await getAllPostsForHome();
  return {
    props: {
      localPosts,
      wordPressPosts
    }
  };
}
