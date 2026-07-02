import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const EnYakinKargomat = () => {
  return (
    <ScreenBackground
      title={t('pages.EnYakinKargomat.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.EnYakinKargomat.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default EnYakinKargomat;
