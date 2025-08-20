import React, { forwardRef } from 'react';
import { Text, View, TextInput, TextInput as RNTextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
import { moderateScale as s } from 'react-native-size-matters';
import styles from './style';
import type { BaseInputProps } from './BaseInputProps';
import colors from '@/shared/theme/color';

const isTablet = DeviceInfo.isTablet();

const BaseInput = forwardRef<RNTextInput, BaseInputProps>((props, ref) => {
  const {
    labelKey,
    placeholderKey,
    leftIcon: LeftIcon,
    rightIcon,
    helperText,
    errorText,
    containerStyle,
    inputStyle,
    editable = true,
    ...textInputProps
  } = props;
  const { t } = useTranslation();
  const iconSize = {
    width: isTablet ? s(30) : s(24),
    height: isTablet ? s(30) : s(24),
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.wrapper}>
        {!!labelKey && <Text style={styles.label}>{t(labelKey)}</Text>}
        <View
          style={[
            styles.inputRow,
            containerStyle,
            errorText && { borderColor: colors.danger },
          ]}
        >
          <View style={styles.iconContainer}>
            {LeftIcon ? <LeftIcon {...iconSize} /> : null}
          </View>

          <TextInput
            ref={ref}
            style={[styles.input, inputStyle]}
            placeholder={placeholderKey ? t(placeholderKey) : undefined}
            accessible
            accessibilityLabel={labelKey ? t(labelKey) : undefined}
            accessibilityHint={
              errorText
                ? `${t(placeholderKey ?? '')}. ${errorText}`
                : placeholderKey
                ? t(placeholderKey)
                : undefined
            }
            accessibilityState={{ disabled: !editable }}
            editable={editable}
            {...textInputProps}
          />

          {rightIcon ? (
            <View style={styles.toggleContainer}>{rightIcon}</View>
          ) : null}
        </View>

        {helperText && !errorText ? (
          <Text style={styles.helperText}>{helperText}</Text>
        ) : null}
        {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      </View>
    </View>
  );
});

export default BaseInput;
