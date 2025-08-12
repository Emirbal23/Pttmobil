// primary-button/PrimaryButton.tsx
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BaseButton from '../base.button/base.button';
import type { PrimaryButtonProps } from './primary.button.props';

const PrimaryButton = ({ targetScreen, onPress, ...rest }: PrimaryButtonProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (targetScreen) {
      // @ts-ignore - navigation type may vary
      navigation.navigate(targetScreen);
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
