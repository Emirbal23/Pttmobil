import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const About = () => {
  return (
    <ScreenBackground
      title={t('pages.Hakkimizda.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.Hakkimizda.title')}</Text>
      </View>
    </ScreenBackground>
  );
};

export default About;
