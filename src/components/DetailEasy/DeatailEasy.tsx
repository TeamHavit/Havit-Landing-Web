import React from 'react';
import Image from 'next/image';

import onbardingSrc from '../../../public/static/images/onboarding.webp';

import Styles from './DetailEasy.module.scss';

export default function DetailEasy(): JSX.Element {
  return (
    <div className={Styles.DetailEasy}>
      <div className={Styles.DetailEasy__textWrapper}>
        <div className={Styles.DetailEasy__textWrapper__title}>
          <div>모바일 환경에서도</div>
          <div>손쉬운 저장, 간편한 분류</div>
        </div>
        <div className={Styles.DetailEasy__textWrapper__detail}>
          <div>난잡한 카톡 나와의 채팅 속 링크, 쌓여있는 콘텐츠 탭</div>
          <div className={Styles['DetailEasy__textWrapper__detail--strong']}>
            간편한 저장과 분류로,
          </div>
          <div className={Styles['DetailEasy__textWrapper__detail--strong']}>
            잊기 쉬운 콘텐츠들을 한 곳에 모아봐요
          </div>
        </div>
      </div>
      <div className={Styles.DetailEasy__imageWrapper}>
        <div className={Styles.DetailEasy__imageWrapper__image}>
          <Image
            src={onbardingSrc}
            alt="onboarding image"
            placeholder="blur"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
