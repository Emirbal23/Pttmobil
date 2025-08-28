import React from 'react';
import type {
  TouchableOpacityProps,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';

export type ButtonVariant = 'primary';

export interface BaseButtonProps
  extends Omit<TouchableOpacityProps, 'onPress'> {
  label?: string;
  labelKey?: string;
  title?: string;
  buttonStyle?: ViewStyle;
  buttoncontainerStyle?: ViewStyle;

  onPress?: (event?: GestureResponderEvent) => void;
  loading?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: ButtonVariant;

  accessibilityLabel?: string;
  testID?: string;

  children?: React.ReactNode;
}
