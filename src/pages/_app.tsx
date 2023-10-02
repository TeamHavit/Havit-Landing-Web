import '@/styles/globals.scss';
import '../../public/static/fonts/style.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '@/constants/objects/seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
