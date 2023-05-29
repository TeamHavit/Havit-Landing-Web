import React from 'react';
import Image, { StaticImageData } from 'next/image';

import withWindowSize, { DeviceProps } from '@/hocs/withWindowSize';
import { Button } from '@/components/Common/Button';

import mockupLgSrc from '../../../public/static/images/mockup-phone-lg.webp';
import mockupMdSrc from '../../../public/static/images/mockup-phone-md.webp';
import mockupSmSrc from '../../../public/static/images/mockup-phone-sm.webp';
import playstoreLogo from '../../../public/static/images/playstore.webp';
import appstoreLogo from '../../../public/static/images/appstore.webp';

import Styles from './TimeToHavit.module.scss';
import { Line } from '../Common/Line';

function TimeToHavit(props: DeviceProps): JSX.Element {
  const { isPc, isTablet, isMobile } = props;

  const mockupSrc = (): StaticImageData => {
    if (isPc) return mockupLgSrc;
    else if (isTablet) return mockupMdSrc;
    else return mockupSmSrc;
  };

  return (
    <div className={Styles.TimeToHavit}>
      <div className={Styles.TimeToHavit__image}>
        <Image
          src={mockupSrc()}
          alt="mockup phone"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className={Styles.TimeToHavit__title}>
        <div>여러분의 지식을</div>
        <div>체계적으로 HAVIT 해 볼 시간!</div>
      </div>
      <div className={Styles.TimeToHavit__detail}>
        <div>지금 바로 콘텐츠를 아카이빙하세요</div>
        {isMobile && (
          <Line classname={Styles.TimeToHavit__line} direction="row" />
        )}
      </div>
      <div className={Styles.TimeToHavit__store}>
        <Button type="google" text="Google Play" imageSrc={playstoreLogo} />
        <Button
          type="apple"
          text="App Store&nbsp;&nbsp;"
          imageSrc={appstoreLogo}
        />
      </div>
    </div>
  );
}

export default withWindowSize(TimeToHavit);
