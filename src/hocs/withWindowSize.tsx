import React, { ComponentType } from 'react';

import useWindowSize from '@/hooks/useWindowSize';
import { RESPONSIVE_VARIABLE } from '@/constants/objects/responsive';

export interface DeviceProps {
  isPc: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

export default function withWindowSize(Component: ComponentType<DeviceProps>) {
  const WithWindowSizeComponent = () => {
    const { width } = useWindowSize();

    const isPc = width >= RESPONSIVE_VARIABLE['pc'];
    const isTablet =
      width >= RESPONSIVE_VARIABLE['tablet'] &&
      width < RESPONSIVE_VARIABLE['pc'];
    const isMobile = width < RESPONSIVE_VARIABLE['tablet'];

    const deviceProps: DeviceProps = {
      isPc,
      isTablet,
      isMobile,
    };

    return <Component {...deviceProps} />;
  };

  return WithWindowSizeComponent;
}
