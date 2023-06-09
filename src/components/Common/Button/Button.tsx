import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import classNames from 'classnames';

import { LINK_LIST } from '@/constants/objects/link';

import Styles from './Button.module.scss';

interface Props {
  type: 'google' | 'apple';
  imageSrc: StaticImageData;
  text: string;
}

export default function Button(props: Props) {
  const { type, imageSrc, text } = props;
  return (
    <a
      className={Styles.Button}
      target="_blank"
      href={LINK_LIST[type]}
      rel="noreferrer"
    >
      <div className={Styles.Button__logoWrapper}>
        <Image
          className={classNames(
            Styles.Button__logoWrapper__logo,
            Styles[`Button__logoWrapper__logo--${type}`],
          )}
          src={imageSrc}
          alt="store logo"
          priority
        />
      </div>
      <div className={Styles.Button__nameWrapper}>
        <div className={Styles.Button__nameWrapper__name}>{text}</div>
      </div>
    </a>
  );
}
