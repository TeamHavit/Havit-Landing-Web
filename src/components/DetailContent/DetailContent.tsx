import React from 'react';
import Image from 'next/image';

import useWindowSize from '@/hooks/useWindowSize';
import { RESPONSIVE_VARIABLE } from '@/constants/objects/responsive';

import mockupLgSrc from '../../../public/static/images/mockup-content-list-pc.webp';
import mockupMdSrc from '../../../public/static/images/mockup-content-list-md.webp';
import mockupSmSrc from '../../../public/static/images/mockup-content-list-sm.webp';
import backImageSrc from '../../../public/static/images/blur-bg-image.webp';

import Styles from './DetailContent.module.scss';

export default function DetailContent(): JSX.Element {
  const { width } = useWindowSize();

  const mockupSrc =
    width >= RESPONSIVE_VARIABLE['pc']
      ? mockupLgSrc
      : width < RESPONSIVE_VARIABLE['tablet']
      ? mockupSmSrc
      : mockupMdSrc;

  const TitleText = (): JSX.Element => {
    return width >= RESPONSIVE_VARIABLE['pc'] ? (
      <span>
        저장한 콘텐츠를 <br /> 한눈에
      </span>
    ) : (
      <span>저장한 콘텐츠를 한눈에</span>
    );
  };

  const DetailText = (): JSX.Element => {
    return width >= RESPONSIVE_VARIABLE['pc'] ? (
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
            src={mockupSrc}
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
          src={backImageSrc}
          alt="background blur image"
          style={{ width: '105%', height: 'auto' }}
        />
      </div>
      {width >= RESPONSIVE_VARIABLE['pc'] && (
        <div className={Styles.DetailContent__blur} />
      )}
    </div>
  );
}
