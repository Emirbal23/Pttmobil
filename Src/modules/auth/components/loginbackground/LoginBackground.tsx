import React from 'react';
import { View, ImageBackground, Text, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import styles from './style';
import type { LoginBackgroundProps } from './LoginBackgoundProps';
import images from '@/assets/images';
import { LoginHeader } from '@/shared/components/headers';
export const LoginBackground: React.FC<LoginBackgroundProps> = ({
  children,
  containerStyle,
  backgroundImageStyle,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.BackGround}>
      <StatusBar
        translucent={false}
        backgroundColor="#000"
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop:
            Platform.OS === 'android'
              ? (StatusBar.currentHeight ?? 0) * 0.5
              : 0,
        }}
      >
        <LoginHeader />
        <View style={styles.Container}>
          <ImageBackground
            source={images.LoginBackground}
            style={[styles.BackGroundContainer, backgroundImageStyle]}
          >
            <Text style={styles.WelcomeText}>{t('ui.welcome')}</Text>
          </ImageBackground>
          <View style={[styles.WhiteContainer, containerStyle]}>
            <View style={{ flex: 1 }}>{children}</View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
