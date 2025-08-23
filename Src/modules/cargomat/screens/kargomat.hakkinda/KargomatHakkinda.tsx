import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const KargomatHakkinda = () => {
  return (
    <ScreenBackground
      title={t('pages.KargomatHakkinda.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.KargomatHakkinda.title')}....Ready to soon</Text>
      </View>
    </ScreenBackground>
  );
};

export default KargomatHakkinda;
