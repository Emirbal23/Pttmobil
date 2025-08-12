import React from 'react';
import { SafeAreaView, View, ImageBackground } from 'react-native';
import styles from './style';
import type { ScreenBackgroundProps } from './screenbackgound.props';

export const ScreenBackground: React.FC<ScreenBackgroundProps> = ({
  backgroundSource,
  nav,
  headerContent,
  children,
  containerStyle,
  backgroundImageStyle,
}) => {
  return (
    <View style={styles.BackGround}>
      <SafeAreaView style={{ flex: 1 }}>
        {nav}
        <View style={styles.Container}>
          <ImageBackground
            source={backgroundSource}
            style={[styles.BackGroundContainer, backgroundImageStyle]}
          >
            {headerContent}
          </ImageBackground>

          <View style={[styles.WhiteContainer, { flex: 1 }, containerStyle]}>
            <View style={{ flex: 1 }}>
              {children}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
