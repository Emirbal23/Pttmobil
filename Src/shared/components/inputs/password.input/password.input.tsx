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

  const iconSize = {
    width: isTablet ? s(30) : s(24),
    height: isTablet ? s(30) : s(24),
  };

  const handleChangeText = (text: string) => {
    if (error) setError(undefined); // yazarken hatayı temizle
    onChangeText?.(text); // dışarıdan gelen handler’ı koru
  };

  const handleEndEditing = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    const text = e.nativeEvent.text?.trim() ?? '';
    // Mode'a göre kontrol: login'de sadece boş mu, register'da güçlü şifre
    if (!text) {
      setError('Şifre boş bırakılamaz');
    } else if (inputMode === 'register' && !isStrongPassword(text)) {
      setError('Şifre en az 8 karakter, 1 büyük harf ve 1 rakam içermelidir');
    } else {
      setError(undefined);
    }
    onEndEditing?.(e); // dışarıdan gelen handler’ı koru
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
