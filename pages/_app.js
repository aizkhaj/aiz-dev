import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import '../styles/tailwind.css';
import SEO from '../next-seo.config';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/favicon-z.ico" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}