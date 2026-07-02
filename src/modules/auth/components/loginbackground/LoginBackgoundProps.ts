import type { ReactNode } from 'react';
import { StyleProp, ViewStyle, ImageStyle } from 'react-native';

export interface LoginBackgroundProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundImageStyle?: StyleProp<ImageStyle>;
}
