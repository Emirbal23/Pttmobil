import React, { forwardRef } from 'react';
import { Text, View, TextInput, TextInput as RNTextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
import { moderateScale as s } from 'react-native-size-matters';
import styles from './style';
import type { BaseInputProps } from './base.input.props';
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
    <View style={[styles.container, containerStyle]}>
      <View style={styles.wrapper}>
        {!!labelKey && (
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{t(labelKey)}</Text>
          </View>
        )}

        <View
          style={[
            styles.inputRow,
            errorText && { borderColor: colors.tertiary },
          ]}
        >
          <View style={styles.iconContainer}>
            {LeftIcon ? <LeftIcon {...iconSize} /> : null}
          </View>

          <TextInput
            ref={ref}
            style={[styles.input, inputStyle]}
            placeholder={t(placeholderKey)}
            accessible
            accessibilityLabel={labelKey ? t(labelKey) : undefined}
            accessibilityHint={
              errorText
                ? `${t(placeholderKey)}. ${errorText}`
                : t(placeholderKey)
            }
            accessibilityState={{ disabled: !editable }}
            editable={editable}
            {...textInputProps}
          />

          {rightIcon ? (
            <View style={styles.toggleContainer}>{rightIcon}</View>
          ) : null}
        </View>

        {/* Helper / Error text */}
        {helperText && !errorText ? (
          <Text style={styles.helperText}>{helperText}</Text>
        ) : null}
        {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      </View>
    </View>
  );
});

export default BaseInput;
