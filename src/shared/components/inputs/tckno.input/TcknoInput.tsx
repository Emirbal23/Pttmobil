import React from 'react';
import BaseInput from '../base.input/BaseInput';
import { TcknoInputProps } from './TcknoInputProps';
import { useTcknoValidation } from './hooks';

const TcknoInput: React.FC<TcknoInputProps> = ({
  value = '',
  onChangeText,
  requiredLength = 11,
  validateOnEnd = true,
  errorText,
  placeholderKey = 'ui.TCKNOholder',
  labelKey = 'ui.TCKNO',
  ...rest
}) => {
  const { error, handleChangeText, handleBlurEvent, handleEndEditingEvent } =
    useTcknoValidation(requiredLength);

  return (
    <BaseInput
      labelKey={labelKey}
      placeholderKey={placeholderKey}
      value={value}
      keyboardType="number-pad"
      inputMode="numeric"
      maxLength={requiredLength}
      onChangeText={txt => {
        const digits = handleChangeText(txt);
        onChangeText?.(digits);
      }}
      onBlur={() => validateOnEnd && handleBlurEvent(value)}
      onEndEditing={() => validateOnEnd && handleEndEditingEvent(value)}
      errorText={errorText || error}
      {...rest}
    />
  );
};

export default TcknoInput;
