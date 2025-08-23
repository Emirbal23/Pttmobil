import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const KargomatGonderileri = () => {
  return (
    <ScreenBackground
      title={t('pages.KargomatGonderileri.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.KargomatGonderileri.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default KargomatGonderileri;
