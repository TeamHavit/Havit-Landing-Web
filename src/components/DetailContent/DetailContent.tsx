import React from 'react';
import Image, { StaticImageData } from 'next/image';

import withWindowSize, { DeviceProps } from '@/hocs/withWindowSize';

import mockupLgSrc from '../../../public/static/images/mockup-content-list-pc.webp';
import mockupMdSrc from '../../../public/static/images/mockup-content-list-md.webp';
import mockupSmSrc from '../../../public/static/images/mockup-content-list-sm.webp';
import blurBackImageLgSrc from '../../../public/static/images/blur-bg-image.webp';
import blurBackImageSmSrc from '../../../public/static/images/blur-bg-image-sm.webp';

import Styles from './DetailContent.module.scss';

function DetailContent(props: DeviceProps): JSX.Element {
  const { isPc, isTablet, isMobile } = props;

  const mockupSrc = (): StaticImageData => {
    if (isPc) return mockupLgSrc;
    else if (isTablet) return mockupMdSrc;
    else return mockupSmSrc;
  };

  const blurBackImageSrc = isMobile ? blurBackImageSmSrc : blurBackImageLgSrc;

  const TitleText = (): JSX.Element => {
    return isPc ? (
      <span>
        저장한 콘텐츠를 <br /> 한눈에
      </span>
    ) : (
      <span>저장한 콘텐츠를 한눈에</span>
    );
  };

  const DetailText = (): JSX.Element => {
    return isPc ? (
      <>
        <div>복잡한 콘텐츠 홍수 속에서</div>
        <div>내가 저장하고 읽은 콘텐츠 현황을</div>
        <div>한 눈에 확인할 수 있습니다.</div>
      </>
    ) : (
      <>
        <div>복잡한 콘텐츠 홍수 속에서 내가 저장하고 읽은</div>
        <div>콘텐츠 현황을 한 눈에 확인할 수 있습니다.</div>
      </>
    );
  };

  return (
    <div className={Styles.DetailContent}>
      <div className={Styles.DetailContent__mainWrapper}>
        <div className={Styles.DetailContent__mainWrapper__mainImage}>
          <Image
            src={mockupSrc()}
            alt="havit mockup content list"
            style={{ width: 'auto', height: '100%' }}
          />
        </div>
        <div className={Styles.DetailContent__mainWrapper__textWrapper}>
          <div className={Styles.DetailContent__mainWrapper__title}>
            <TitleText />
          </div>
          <div className={Styles.DetailContent__mainWrapper__detail}>
            <DetailText />
          </div>
        </div>
      </div>
      <div className={Styles.DetailContent__backgroundImage}>
        <Image
          src={blurBackImageSrc}
          alt="background blur image"
          style={{ width: '105%', height: 'auto' }}
        />
      </div>
      {isPc && <div className={Styles.DetailContent__blur} />}
    </div>
  );
}

export default withWindowSize(DetailContent);
