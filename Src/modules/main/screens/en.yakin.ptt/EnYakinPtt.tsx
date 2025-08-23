import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import { t } from 'i18next';

const EnYakinPtt = () => {
  return (
    <ScreenBackground
      title={t('pages.EnYakinPTT.title')}
      rightIcon={true}
      variant="detail"
    >
      <View>
        <Text>{t('pages.EnYakinPTT.title')}</Text>
      </View>
    </ScreenBackground>
  );
};

export default EnYakinPtt;

const styles = StyleSheet.create({});
