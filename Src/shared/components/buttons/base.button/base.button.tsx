import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { t } from 'i18next';
import type { BaseButtonProps } from './base.button.props';
import styles from './style'; // mevcut stillerini burada kullan/ayır

const BaseButton = ({
  labelKey,
  onPress,
  disabled,
  loading,
  leftIcon,
  rightIcon,
  accessibilityLabel,
  testID,
}: BaseButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID={testID}
        accessibilityLabel={accessibilityLabel ?? t(labelKey)}
        accessibilityRole="button"
        activeOpacity={0.7}
        style={styles.Button}
        onPress={onPress}
        disabled={disabled || loading}
      >
        {leftIcon}
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.ButtonText}>{t(labelKey)}</Text>
        )}
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};

export default BaseButton;
