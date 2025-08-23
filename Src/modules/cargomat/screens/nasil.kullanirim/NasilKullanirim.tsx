import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const NasilKullanirim = () => {
  return (
    <ScreenBackground
      title={t('pages.NasilKullanirim.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.NasilKullanirim.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default NasilKullanirim;
