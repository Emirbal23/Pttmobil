import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import BaseButton from '../base.button/base.button';
import type { PrimaryButtonProps } from './primary.button.props';
import type { GestureResponderEvent } from 'react-native';

const PrimaryButton = ({
  labelKey,
  label,
  targetScreen,
  onPress,
  ...rest
}: PrimaryButtonProps) => {
  const navigation = useNavigation<any>();
  const { t } = useTranslation();

  const handlePress = (event?: GestureResponderEvent) => {
    if (onPress) {
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
    />
  );
};

export default PrimaryButton;
