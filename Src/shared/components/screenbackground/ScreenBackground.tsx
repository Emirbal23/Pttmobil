import { SafeAreaView, View, Platform, StatusBar } from 'react-native';
import React from 'react';
import styles from './style';
import DetailHeader from '@/shared/components/headers/detail.header/DetailHeader';

export const ScreenBackground: React.FC<{
  title: string;
  children?: React.ReactNode;
}> = ({ title, children }) => {
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
            Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
        }}
      >
        <DetailHeader title={title} />
        <View style={[{ backgroundColor: 'white', height: '100%' }]}>
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
};
