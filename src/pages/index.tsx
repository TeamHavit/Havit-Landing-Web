import Head from 'next/head';

import { Main } from '@/components/Main';
import { DetailEasy } from '@/components/DetailEasy';
import { DetailContent } from '@/components/DetailContent';
import { DetailCheck } from '@/components/DetailCheck';
import { TimeToHavit } from '@/components/TimeToHavit';
import { Footer } from '@/components/Footer';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>HAVIT | 기억하고 싶은 모든 콘텐츠를 내 손안에</title>
        <meta
          name="description"
          content="기억하고 싶은 모든 콘텐츠를 내 손안에, HAVIT"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main className={styles.main}>
        <Main />
        <DetailEasy />
        <DetailContent />
        <DetailCheck />
        <TimeToHavit />
        <Footer />
      </main>
    </>
  );
}
