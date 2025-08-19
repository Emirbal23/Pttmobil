import React, { forwardRef } from 'react';
import type { TextInput as RNTextInput, TextInputProps } from 'react-native';
import BaseInput from '../base.input/BaseInput';
import type { TelephoneInputProps } from './TelephoneInputProps';
import { useTelephoneFormatting } from './hooks';

/**
 * TelephoneInput (TR-centric)
 * - Displays formatted value (e.g., +90 (5XX) XXX XX XX)
 * - Emits raw digits to parent via onChangeText (e.g., 905XXXXXXXX)
 * - Optional: validateOnEnd -> sets local error using isPhoneNumber()
 */
const TelephoneInput = forwardRef<RNTextInput, TelephoneInputProps>(
  (
    {
      value,
      onChangeText,
      placeholderKey,
      labelKey,
      defaultCountryTR = false,
      errorText,
      validateOnEnd = false,
      ...rest
    },
    ref,
  ) => {
    const {
      displayValue,
      handleChangeText,
      handleFocus,
      handleEndEditing,
      localError,
    } = useTelephoneFormatting({ value, onChangeText, defaultCountryTR, validateOnEnd });

    const maxLen = 19;

    return (
      <BaseInput
        ref={ref}
        labelKey={labelKey || ('phonesubtitle' as any)}
        placeholderKey={placeholderKey || ('phoneholder' as any)}
        keyboardType="phone-pad"
        inputMode="numeric"
        textContentType={"telephoneNumber" as TextInputProps['textContentType']}
        maxLength={maxLen}
        autoCorrect={false}
        autoComplete={'tel'}
        value={displayValue}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onEndEditing={handleEndEditing}
        errorText={errorText ?? localError}
        {...rest}
      />
    );
  },
);

export default TelephoneInput;
