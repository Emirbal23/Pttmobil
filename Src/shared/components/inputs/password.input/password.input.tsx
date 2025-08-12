import React, { useState } from 'react';
import {
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { moderateScale as s } from 'react-native-size-matters';

import BaseInput from '../base.input/base.input';
import type { PasswordInputProps } from './password.input.props';
import icons from '@/assets/icons';
import { isStrongPassword } from '@/shared/utils/validator';
import { useTranslation } from 'react-i18next';

const isTablet = DeviceInfo.isTablet();

const PasswordInput = ({
  leftIcon,
  onChangeText,
  onEndEditing,
  mode,
  ...rest
}: PasswordInputProps) => {
  const inputMode = mode ?? 'login';
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { t } = useTranslation();

  const iconSize = {
    width: isTablet ? s(30) : s(24),
    height: isTablet ? s(30) : s(24),
  };

  const handleChangeText = (text: string) => {
    if (error) setError(undefined); 
    onChangeText?.(text); 
  };

  const handleEndEditing = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    const text = e.nativeEvent.text?.trim() ?? '';
    if (inputMode === 'login') {
      // Login ekranında yalnızca boşluk kontrolü yap
      if (!text) {
        setError(t('passworderror'));
      } else {
        setError(undefined);
      }
    } else if (inputMode === 'register' || inputMode === 'newpass') {
      const validationError = isStrongPassword(text);
      setError(validationError);
    } else {
      setError(undefined);
    }
    onEndEditing?.(e); 
  };

  return (
    <BaseInput
      {...rest}
      labelKey={rest.labelKey ?? 'passsubtitle'}
      placeholderKey={rest.placeholderKey ?? 'passholder'}
      autoCapitalize="none"
      secureTextEntry={!visible}
      leftIcon={
        leftIcon ??
        (props => <icons.pttlock width={props.width} height={props.height} />)
      }
      rightIcon={
        <TouchableOpacity onPress={() => setVisible(v => !v)}>
          {visible ? (
            <icons.pttsifregoster {...iconSize} />
          ) : (
            <icons.pttsifregosterme {...iconSize} />
          )}
        </TouchableOpacity>
      }
      errorText={rest.errorText ?? error}
      onChangeText={handleChangeText}
      onEndEditing={handleEndEditing}
    />
  );
};

export default PasswordInput;
