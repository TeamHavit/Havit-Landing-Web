import React from 'react';
import Image from 'next/image';

import { Button } from '@/components/Common/Button';
import useWindowSize from '@/hooks/useWindowSize';
import { RESPONSIVE_VARIABLE } from '@/constants/objects/responsive';

import textLogo from '../../../public/static/images/text-logo.webp';
import playstoreLogo from '../../../public/static/images/playstore.webp';
import appstoreLogo from '../../../public/static/images/appstore.webp';
import mockupPCSrc from '../../../public/static/images/mockup-main-lg.webp';
import mockupTabletSrc from '../../../public/static/images/mockup-main-md.webp';
import mockupMobileSrc from '../../../public/static/images/mockup-main-sm.webp';

import Styles from './Main.module.scss';

export default function Main(): JSX.Element {
  const { width } = useWindowSize();

  const mockupSrc =
    width >= RESPONSIVE_VARIABLE['pc']
      ? mockupPCSrc
      : width < RESPONSIVE_VARIABLE['tablet']
      ? mockupMobileSrc
      : mockupTabletSrc;

  return (
    <div className={Styles.Main}>
      {width > RESPONSIVE_VARIABLE['tablet'] ? (
        <div className={Styles.Main__title}>
          기억하고 싶은 모든 콘텐츠를 내 손안에
        </div>
      ) : (
        <div className={Styles.Main__title}>
          <div>기억하고 싶은</div>
          <div>모든 콘텐츠를 내 손안에</div>
        </div>
      )}
      <Image
        className={Styles.Main__logo}
        src={textLogo}
        alt="havit text logo"
        priority
      />
      {width > RESPONSIVE_VARIABLE['tablet'] ? (
        <div className={Styles.Main__introText}>
          그때 봤던 그 콘텐츠 어디있지?&nbsp;
          <span className={Styles['Main__introText--strong']}>
            콘텐츠 저장, 해빗에서 쉽고 간편하게
          </span>
        </div>
      ) : (
        <>
          <div className={Styles.Main__introText}>
            그때 봤던 그 콘텐츠 어디있지?
          </div>
          <div className={Styles['Main__introText--strong']}>
            콘텐츠 저장, 해빗에서 쉽고 간편하게
          </div>
        </>
      )}
      <div className={Styles.Main__store}>
        <Button type="google" text="Google Play" imageSrc={playstoreLogo} />
        <Button
          type="apple"
          text="App Store&nbsp;&nbsp;"
          imageSrc={appstoreLogo}
        />
      </div>
      <div className={Styles.Main__image}>
        <Image
          src={mockupSrc}
          alt="havit mockup main"
          style={{ width: 'auto', height: '100%' }}
          priority
        />
      </div>
    </div>
  );
}
