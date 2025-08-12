import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import BaseInput from '../base.input/base.input';
import type { EmailInputProps } from './email.input.props';
import icons from '@/assets/icons';
import { isValidEmail } from '@/shared/utils/validator';

const EmailInput = ({
  onChangeText,
  onEndEditing,
  leftIcon,
  ...rest
}: EmailInputProps) => {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChangeText = (text: string) => {
    if (error) setError(undefined);
    onChangeText?.(text);
  };

  const handleEndEditing = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    const text = e.nativeEvent.text?.trim();
    if (text === '') {
      setError('Boş bırakılamaz');
    } else if (text && !isValidEmail(text)) {
      setError('Geçersiz e-posta adresi');
    }
    onEndEditing?.(e);
  };

  return (
    <BaseInput
      {...rest}
      labelKey="emailsubtitle"
      placeholderKey="emailholder"
      keyboardType="email-address"
      inputMode="email"
      autoCapitalize="none"
      leftIcon={leftIcon ?? (p => <icons.pttuser {...p} />)}
      errorText={rest.errorText ?? error}
      onChangeText={handleChangeText}
      onEndEditing={handleEndEditing}
    />
  );
};

export default EmailInput;
