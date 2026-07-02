import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import BaseButton from '../base.button/BaseButton';
import type { PrimaryButtonProps } from './PrimaryButtonProps';
import type { GestureResponderEvent } from 'react-native';

const PrimaryButton = ({
  labelKey,
  label,
  targetScreen,
  onPress,
  ...rest
}: PrimaryButtonProps) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const buttonText = useMemo(() => {
    if (label && label.trim().length > 0) return label;
    if (labelKey && String(labelKey).trim().length > 0) return t(labelKey);
    return '';
  }, [label, labelKey, t]);

  const handlePress = (event?: GestureResponderEvent) => {
    if (typeof onPress === 'function') {
      onPress(event);
      return;
    }
    if (targetScreen) {
      navigation.navigate(targetScreen as never);
    }
  };

  return (
    <BaseButton
      {...rest}
      onPress={handlePress}
      label={buttonText}
      title={buttonText}
      accessibilityLabel={buttonText || undefined}
    >
      {buttonText}
    </BaseButton>
  );
};

export default PrimaryButton;
