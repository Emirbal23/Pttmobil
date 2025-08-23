import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const BireyselSiparis = () => {
  return (
    <ScreenBackground
      title={t('pages.BireyselSiparis.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.BireyselSiparis.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default BireyselSiparis;
