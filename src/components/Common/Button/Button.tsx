import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

import Styles from './Button.module.scss';

interface Props {
  imageSrc: StaticImageData;
  text: string;
}

export default function Button(props: Props) {
  const { imageSrc, text } = props;
  return (
    <div className={Styles.Button}>
      <div className={Styles.Button__logoWrapper}>
        <Image
          className={Styles.Button__logoWrapper__logo}
          src={imageSrc}
          alt="store logo"
        />
      </div>
      <div className={Styles.Button__nameWrapper}>
        <div className={Styles.Button__nameWrapper__name}>{text}</div>
      </div>
    </div>
  );
}
