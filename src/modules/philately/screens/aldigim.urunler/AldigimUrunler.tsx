import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const AldigimUrunler = () => {
  return (
    <ScreenBackground
      title={t('pages.AldigimUrunler.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.AldigimUrunler.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default AldigimUrunler;
