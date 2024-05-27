// pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Require jQuery
const $ = require('jquery');

// Make jQuery available globally
declare global {
  interface Window {
    $: any;
  }
}

if (typeof window !== 'undefined') {
  window.$ = $;
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
        /* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script> */
  }, [])

  return (
    <>
      {/* <Head> */}
        {/* <!-- Bootstrap JS and dependencies --> */}
        <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" defer/>
        {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script> */}
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" defer/>
      {/* </Head> */}
      <Component {...pageProps} />;
    </>

  )
}

export default MyApp;
