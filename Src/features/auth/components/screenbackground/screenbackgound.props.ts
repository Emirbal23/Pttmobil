import type { ReactNode } from 'react';
import { StyleProp, ViewStyle, ImageStyle } from 'react-native';

export interface ScreenBackgroundProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundImageStyle?: StyleProp<ImageStyle>;
}
