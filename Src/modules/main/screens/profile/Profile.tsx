import { View, Text } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const Profile = () => {
  return (
    <ScreenBackground
      variant="detail"
      rightIcon={true}
      title={t('pages.Profile.title')}
    >
      <Text>{t('pages.Profile.title')}</Text>
    </ScreenBackground>
  );
};

export default Profile;
