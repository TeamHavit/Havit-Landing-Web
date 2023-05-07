import React from 'react';
import classNames from 'classnames';

import Styles from './Line.module.scss';

interface Props {
  direction: 'row' | 'col';
  classname?: string;
}

export default function Line(props: Props) {
  const { direction, classname } = props;

  return (
    <div className={classNames(Styles[`Line--${direction}`], classname)} />
  );
}
