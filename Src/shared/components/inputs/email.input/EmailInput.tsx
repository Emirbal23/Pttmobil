import React from 'react';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputFocusEventData,
} from 'react-native';
import BaseInput from '../base.input/BaseInput';
import type { EmailInputProps } from './EmailInputProps';
import icons from '@/assets/icons';
import { useEmailValidation } from './hooks';

const EmailInput: React.FC<EmailInputProps> = ({
  onChangeText,
  onEndEditing,
  onBlur,
  leftIcon,
  labelKey,
  placeholderKey,
  errorText,
  ...rest
}) => {
  const {
    error,
    handleChangeText,
    handleEndEditingEvent,
    handleBlurEvent,
  } = useEmailValidation();

  const onChangeTextProxy = (text: string) => {
    handleChangeText(text);
    onChangeText?.(text);
  };

  const onEndEditingProxy = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    handleEndEditingEvent(e);
    onEndEditing?.(e);
  };

  const onBlurProxy = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    handleBlurEvent(e);
    onBlur?.(e);
  };

  return (
    <BaseInput
      {...rest}
      labelKey={labelKey ?? 'emailsubtitle'}
      placeholderKey={placeholderKey ?? 'emailholder'}
      keyboardType="email-address"
      inputMode="email"
      autoCapitalize="none"
      leftIcon={leftIcon ?? ((p: any) => <icons.pttuser {...p} />)}
      errorText={errorText ?? error}
      onChangeText={onChangeTextProxy}
      onEndEditing={onEndEditingProxy}
      onBlur={onBlurProxy}
    />
  );
};

export default EmailInput;
