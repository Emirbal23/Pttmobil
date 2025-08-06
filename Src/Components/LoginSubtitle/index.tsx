import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import React from 'react';
import styles from './style';

type LoginSubtitleProps = {
  type: 'login' | 'forget' | 'verification';
};

const LoginSubtitle: React.FC<LoginSubtitleProps> = ({ type }) => {
  const { t } = useTranslation();

  const subtitleKey =
    type === 'forget'
      ? 'subtitleForget'
      : type === 'verification'
      ? 'subtitleVerification'
      : 'subtitleLogin';

  return (
    <View style={styles.Container}>
      <Text style={styles.SubtitleText}>{t(subtitleKey)}</Text>
    </View>
  );
};

export default LoginSubtitle;
