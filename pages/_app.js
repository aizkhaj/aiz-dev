import React from 'react';
import App from 'next/app';
import { DefaultSeo } from 'next-seo';

import '../styles/tailwind.css';
import SEO from '../next-seo.config';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}