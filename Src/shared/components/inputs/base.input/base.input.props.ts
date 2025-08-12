import React from 'react';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type IconComponent = React.FC<{ width: number; height: number }>;

export interface BaseInputProps extends TextInputProps {
  /** i18n key for the field label (optional for UI flexibility) */
  labelKey?: string;
  /** i18n key for the placeholder */
  placeholderKey: string;
  /** Optional left icon component (receives width & height) */
  leftIcon?: IconComponent;
  /** Optional right-side React node (e.g., eye toggle button) */
  rightIcon?: React.ReactNode;
  /** Optional helper text shown under the input */
  helperText?: string;
  /** Optional error text shown under the input; also sets accessibility invalid state */
  errorText?: string;
  /** Style overrides */
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}
