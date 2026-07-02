import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const PostaKodu = () => {
  return (
    <ScreenBackground
      title={t('pages.PostaKodu.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.PostaKodu.title')}</Text>
      </View>
    </ScreenBackground>
  );
};

export default PostaKodu;
