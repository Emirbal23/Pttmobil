import type { ReactNode } from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle, ImageStyle } from 'react-native';

export interface ScreenBackgroundProps {
  backgroundSource: ImageSourcePropType;
  nav?: ReactNode; // üst kısımda navigation bar, header vs.
  headerContent?: ReactNode; // arka planın üstünde gözükecek içerik (ör: başlık)
  children: ReactNode; // beyaz alanın içeriği
  containerStyle?: StyleProp<ViewStyle>;
  backgroundImageStyle?: StyleProp<ImageStyle>;
}