import React from 'react';
import { SafeAreaView, View, ImageBackground, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style';
import type { ScreenBackgroundProps } from './screenbackgound.props';
import images from '@/assets/images';
import { NavigationBar } from '../';

export const ScreenBackground: React.FC<ScreenBackgroundProps> = ({
  children,
  containerStyle,
  backgroundImageStyle,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.BackGround}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationBar />
        <View style={styles.Container}>
          <ImageBackground
            source={images.LoginBackground}
            style={[styles.BackGroundContainer, backgroundImageStyle]}
          >
            <Text style={styles.WelcomeText}>{t('welcome')}</Text>
          </ImageBackground>

          <View style={[styles.WhiteContainer, { flex: 1 }, containerStyle]}>
            <View style={{ flex: 1 }}>{children}</View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
