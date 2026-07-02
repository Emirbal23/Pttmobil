import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const FilatelikUrunler = () => {
  return (
    <ScreenBackground
      title={t('pages.FilatelikUrunler.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.FilatelikUrunler.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default FilatelikUrunler;
