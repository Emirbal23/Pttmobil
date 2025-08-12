import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { t } from 'i18next';
import baseStyles from '../base.button/style';
import type { SecondaryButtonProps } from './secondary.button.props';

const SecondaryButton = ({
  email,
  password,
  onPress,
  labelKey,
  disabled,
  testID,
  targetScreen,
}: SecondaryButtonProps) => {
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    // Sadece email/password sağlandıysa iç validasyon yap
    const wantsInternalValidation = email !== undefined || password !== undefined;

    if (wantsInternalValidation) {
      if (!email || !password) {
        setError(t('emailOrPasswordEmpty'));
        return;
      }
      setError('');
    }

    if (targetScreen) {
      // @ts-ignore
      navigation.navigate(targetScreen);
      return;
    }

    onPress?.();
  };

  return (
    <View style={baseStyles.container}>
      <TouchableOpacity
        testID={testID}
        activeOpacity={0.7}
        style={baseStyles.Button}
        onPress={handlePress}
        disabled={disabled}
      >
        <Text style={baseStyles.ButtonText}>{t(labelKey)}</Text>
      </TouchableOpacity>
      {error ? <Text style={baseStyles.ErrorText}>{error}</Text> : null}
    </View>
  );
};

export default SecondaryButton;