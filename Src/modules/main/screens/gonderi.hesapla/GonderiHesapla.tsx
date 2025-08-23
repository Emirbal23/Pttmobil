import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const GonderiHesapla = () => {
  return (
    <ScreenBackground
      title={t('pages.GonderiHesapla.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.GonderiHesapla.title')}</Text>
      </View>
    </ScreenBackground>
  );
};

export default GonderiHesapla;
