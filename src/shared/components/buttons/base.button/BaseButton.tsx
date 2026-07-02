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
  buttonStyle,
  buttoncontainerStyle,
}: BaseButtonProps) => {
  const buttonText = label ?? (labelKey ? t(labelKey) : '');

  return (
    <View style={[styles.container, buttoncontainerStyle]}>
      <TouchableOpacity
        testID={testID}
        accessibilityLabel={accessibilityLabel ?? buttonText}
        accessibilityRole="button"
        activeOpacity={0.8}
        style={[styles.Button, buttonStyle]}
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
