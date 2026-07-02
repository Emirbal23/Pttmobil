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
  leftIcon,
  labelKey,
  placeholderKey,
  errorText,
  ...rest
}) => {
  const { error, handleChangeText, handleEndEditingEvent, handleBlurEvent } =
    useEmailValidation();

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

  return (
    <BaseInput
      {...rest}
      labelKey={labelKey ?? 'ui.emailsubtitle'}
      placeholderKey={placeholderKey ?? 'ui.emailholder'}
      keyboardType="email-address"
      inputMode="email"
      autoCapitalize="none"
      leftIcon={
        leftIcon ??
        (({ width, height, color }: { width?: number; height?: number; color?: string }) => (
          <icons.pttuser width={width} height={height} color={color} />
        ))
      }
      errorText={errorText ?? error}
      onChangeText={onChangeTextProxy}
      onEndEditing={onEndEditingProxy}
    />
  );
};

export default EmailInput;
