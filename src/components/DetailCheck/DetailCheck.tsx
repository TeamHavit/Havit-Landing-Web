import React from 'react';
import Image from 'next/image';

import useWindowSize from '@/hooks/useWindowSize';
import { RESPONSIVE_VARIABLE } from '@/constants/objects/responsive';

import checkImageLgSrc from '../../../public/static/images/check.webp';
import checkImageSmSrc from '../../../public/static/images/check-md.webp';

import Styles from './DetailCheck.module.scss';

export default function DetailCheck(): JSX.Element {
  const { width } = useWindowSize();

  const checkImageSrc =
    width >= RESPONSIVE_VARIABLE['pc'] ? checkImageLgSrc : checkImageSmSrc;

  const Title = (): JSX.Element => {
    if (width >= RESPONSIVE_VARIABLE['pc']) {
      return (
        <div className={Styles.DetailCheck__title}>
          잊기 쉬운 콘텐츠, 모두 확인 할 수 있도록
        </div>
      );
    }

    return (
      <div className={Styles.DetailCheck__title}>
        <div>잊기 쉬운 콘텐츠,</div>
        <div>모두 확인 할 수 있도록</div>
      </div>
    );
  };

  return (
    <div className={Styles.DetailCheck}>
      <Title />
      <div className={Styles.DetailCheck__detail}>
        <div>콘텐츠의 제목을 원하는 대로 수정하고,</div>
        <div>저장한 콘텐츠를 잊지 않도록 알림설정을 해보세요.</div>
      </div>
      <div className={Styles.DetailCheck__image}>
        <Image
          src={checkImageSrc}
          alt="havit content check image"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
