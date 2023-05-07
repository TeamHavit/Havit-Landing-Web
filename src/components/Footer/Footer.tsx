import { LINK_LIST } from '@/constants/objects/link';
import React from 'react';

import { Line } from '@/components/Common/Line';

import Styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Footer__linkWrapper}>
        <a target="_blank" href={LINK_LIST['feedback']} rel="noreferrer">
          서비스 피드백
        </a>
        <a target="_blank" href={LINK_LIST['policy']} rel="noreferrer">
          개인정보 처리방침
        </a>
        <div>제휴 및 광고 문의</div>
      </div>
      <Line classname={Styles.Footer__line} direction="row" />
      <div className={Styles.Footer__email}>havitofficial29@gmail.com</div>
      <div className={Styles.Footer__copyright}>
        Copyright HAVIT All rights reserved
      </div>
    </div>
  );
}
