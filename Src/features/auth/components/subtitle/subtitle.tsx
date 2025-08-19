import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import styles from './style';
import { SubtitleProps, SUBTITLE_KEY_BY_TYPE } from './SubtitleProps';

const Subtitle: React.FC<SubtitleProps> = ({ type }) => {
  const { t } = useTranslation();
  const subtitleKey = SUBTITLE_KEY_BY_TYPE[type];

  return (
    <View style={styles.Container}>
      <Text style={styles.SubtitleText}>{t(subtitleKey)}</Text>
    </View>
  );
};

export default Subtitle;
