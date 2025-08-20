import { useEffect } from 'react';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';

export const useDrawerAnimation = (visible: boolean, side: 'left' | 'right') => {
  const isTablet = DeviceInfo.isTablet();
  const panelWidth = isTablet ? wp(45) : wp(82);

  const translateX = useSharedValue(side === 'left' ? -panelWidth : panelWidth);
  const backdrop = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(
      visible ? 0 : side === 'left' ? -panelWidth : panelWidth,
      { duration: 280, easing: Easing.out(Easing.cubic) },
    );
    backdrop.value = withTiming(visible ? 1 : 0, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
    });
  }, [visible, side, panelWidth]);

  return { panelWidth, translateX, backdrop };
};