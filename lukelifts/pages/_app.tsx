// pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

  }, [])

  return <Component {...pageProps} />;
}

export default MyApp;
