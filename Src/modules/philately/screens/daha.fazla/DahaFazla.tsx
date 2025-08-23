import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const DahaFazla = () => {
  return (
    <ScreenBackground
      title={t('pages.DahaFazla.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.DahaFazla.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default DahaFazla;
