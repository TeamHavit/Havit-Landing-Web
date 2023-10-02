import { NextSeo } from 'next-seo';

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
      <NextSeo title="HAVIT" canonical="https://havit.app" />
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
