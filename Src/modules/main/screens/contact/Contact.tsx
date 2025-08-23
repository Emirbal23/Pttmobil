import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';
const Contact = () => {
  return (
    <ScreenBackground
      title={t('pages.Iletisim.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.Iletisim.title')}</Text>
      </View>
    </ScreenBackground>
  );
};

export default Contact;
