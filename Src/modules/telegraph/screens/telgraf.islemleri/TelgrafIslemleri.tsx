import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const TelgrafIslemleri = () => {
  return (
    <ScreenBackground
      title={t('pages.TelgrafIslemleri.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.TelgrafIslemleri.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default TelgrafIslemleri;
