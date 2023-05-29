import React from 'react';
import Image, { StaticImageData } from 'next/image';

import withWindowSize, { DeviceProps } from '@/hocs/withWindowSize';
import { Button } from '@/components/Common/Button';

import textLogo from '../../../public/static/images/text-logo.webp';
import playstoreLogo from '../../../public/static/images/playstore.webp';
import appstoreLogo from '../../../public/static/images/appstore.webp';
import mockupLgSrc from '../../../public/static/images/mockup-main-lg.webp';
import mockupMdSrc from '../../../public/static/images/mockup-main-md.webp';
import mockupSmSrc from '../../../public/static/images/mockup-main-sm.webp';

import Styles from './Main.module.scss';

function Main(props: DeviceProps): JSX.Element {
  const { isPc, isTablet, isMobile } = props;

  const mockupSrc = (): StaticImageData => {
    if (isPc) return mockupLgSrc;
    else if (isTablet) return mockupMdSrc;
    else return mockupSmSrc;
  };

  return (
    <div className={Styles.Main}>
      {isMobile ? (
        <div className={Styles.Main__title}>
          <div>기억하고 싶은</div>
          <div>모든 콘텐츠를 내 손안에</div>
        </div>
      ) : (
        <div className={Styles.Main__title}>
          기억하고 싶은 모든 콘텐츠를 내 손안에
        </div>
      )}
      <Image
        className={Styles.Main__logo}
        src={textLogo}
        alt="havit text logo"
        priority
      />
      {isMobile ? (
        <>
          <div className={Styles.Main__introText}>
            그때 봤던 그 콘텐츠 어디있지?
          </div>
          <div className={Styles['Main__introText--strong']}>
            콘텐츠 저장, 해빗에서 쉽고 간편하게
          </div>
        </>
      ) : (
        <div className={Styles.Main__introText}>
          그때 봤던 그 콘텐츠 어디있지?&nbsp;
          <span className={Styles['Main__introText--strong']}>
            콘텐츠 저장, 해빗에서 쉽고 간편하게
          </span>
        </div>
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
          src={mockupSrc()}
          alt="havit mockup main"
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </div>
    </div>
  );
}

export default withWindowSize(Main);
