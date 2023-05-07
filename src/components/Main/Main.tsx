import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { isDesktop } from 'react-device-detect';

import { Button } from '@/components/Common/Button';

import textLogo from '../../../public/static/images/text-logo.svg';
import playstoreLogo from '../../../public/static/images/playstore.svg';
import appstoreLogo from '../../../public/static/images/appstore.svg';
import mockupPCSrc from '../../../public/static/images/mockup-main-lg.svg';
import mockupMobileSrc from '../../../public/static/images/mockup-main.svg';

import Styles from './Main.module.scss';

export default function Main(): JSX.Element {
  const [isPC, setIsPC] = useState(true);

  useEffect(() => {
    if (!isDesktop) setIsPC(false);
  }, []);

  return (
    <div className={Styles.Main}>
      {isPC ? (
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
      {isPC ? (
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
      {isPC ? (
        <Image
          className={Styles.Main__image}
          src={mockupPCSrc}
          alt="havit mockup main"
          priority
        />
      ) : (
        <Image
          className={Styles.Main__image}
          src={mockupMobileSrc}
          alt="havit mockup main mobile"
          priority
        />
      )}
    </div>
  );
}
