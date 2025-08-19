import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { t } from 'i18next';
import type { BaseButtonProps } from './BaseButtonProps';
import styles from './style';

const BaseButton = ({
  labelKey,
  label,
  onPress,
  disabled,
  loading,
  leftIcon,
  rightIcon,
  accessibilityLabel,
  testID,
}: BaseButtonProps) => {
  const buttonText = label ?? (labelKey ? t(labelKey) : '');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID={testID}
        accessibilityLabel={accessibilityLabel ?? buttonText}
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
          <Text style={styles.ButtonText}>{buttonText}</Text>
        )}
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};

export default BaseButton;
