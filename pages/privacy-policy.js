import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import PrivacyPolicyBody from '../components/privacy-policy-body';

const PrivacyPolicy = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>Privacy & Policy</title>
      </Head>
      <PrivacyPolicyBody />
    </Layout>
  );
};

export default PrivacyPolicy;
