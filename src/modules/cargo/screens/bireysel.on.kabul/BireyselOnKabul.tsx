import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const BireyselOnKabul = () => {
  return (
    <ScreenBackground
      title={t('pages.BireyselOnKabul.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.BireyselOnKabul.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default BireyselOnKabul;
