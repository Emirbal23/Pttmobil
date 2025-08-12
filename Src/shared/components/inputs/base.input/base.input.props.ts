import React from 'react';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type IconComponent = React.FC<{ width: number; height: number }>;

export interface BaseInputProps extends TextInputProps {
  labelKey?: string;
  placeholderKey: string;
  leftIcon?: IconComponent;
  rightIcon?: React.ReactNode;
  helperText?: string;
  errorText?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}
