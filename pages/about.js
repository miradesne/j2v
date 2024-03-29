import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import LearnMoreAboutUs from '../components/learn-more-about-us';
import OurTeams from '../components/our-teams';

const About = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>About</title>
      </Head>
      <LearnMoreAboutUs />
      <OurTeams />
    </Layout>
  );
};

export default About;
