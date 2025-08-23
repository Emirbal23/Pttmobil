import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const KargoTakip = () => {
  return (
    <ScreenBackground
      title={t('pages.KargoTakip.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.KargoTakip.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default KargoTakip;
