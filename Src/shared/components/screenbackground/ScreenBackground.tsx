import { View, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import styles from './style';
import { DetailHeader, MainHeader } from '@/shared/components/headers';

export const ScreenBackground: React.FC<{
  variant: 'detail' | 'main';
  title?: string;
  children?: React.ReactNode;
}> = ({ variant, title, children }) => {
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
        {variant === 'detail' ? (
          <DetailHeader title={title || ''} />
        ) : (
          <MainHeader />
        )}
        <View style={[{ backgroundColor: 'white', height: '100%' }]}>
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
};
