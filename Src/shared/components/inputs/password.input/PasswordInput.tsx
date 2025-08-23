import React from 'react';
import {
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { moderateScale as s } from 'react-native-size-matters';

import BaseInput from '../base.input/BaseInput';
import type { PasswordInputProps } from './PasswordInputProps';
import icons from '@/assets/icons';
import { usePasswordValidation } from './hooks';

const isTablet = DeviceInfo.isTablet();

const PasswordInput: React.FC<PasswordInputProps> = ({
  leftIcon,
  onChangeText,
  onEndEditing,
  mode = 'login',
  labelKey,
  placeholderKey,
  errorText,
  ...rest
}) => {
  const {
    visible,
    toggleVisible,
    error,
    handleChangeText,
    handleEndEditingEvent,
  } = usePasswordValidation(mode);

  const iconSize = {
    width: isTablet ? s(30) : s(24),
    height: isTablet ? s(30) : s(24),
  };

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
      labelKey={
        labelKey ??
        (mode === 'newpass' || mode === 'register'
          ? 'ui.newpasssubtitle'
          : 'ui.passsubtitle')
      }
      placeholderKey={
        placeholderKey ??
        (mode === 'newpass' || mode === 'register'
          ? 'ui.newpassholder'
          : 'ui.passholder')
      }
      autoCapitalize="none"
      secureTextEntry={!visible}
      leftIcon={
        leftIcon ??
        (({ width, height }: { width?: number; height?: number; color?: string }) => (
          <icons.pttlock width={width} height={height} />
        ))
      }
      rightIcon={
        <TouchableOpacity onPress={toggleVisible}>
          {visible ? (
            <icons.pttsifregoster {...iconSize} />
          ) : (
            <icons.pttsifregosterme {...iconSize} />
          )}
        </TouchableOpacity>
      }
      errorText={errorText ?? error}
      onChangeText={onChangeTextProxy}
      onEndEditing={onEndEditingProxy}
    />
  );
};

export default PasswordInput;
