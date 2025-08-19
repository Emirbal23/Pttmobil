import React from 'react';
import type {
  TouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface BaseButtonProps
  extends Omit<TouchableOpacityProps, 'onPress'> {
  label?: string;
  labelKey?: string; 
  title?: string; 

  onPress?: (event?: GestureResponderEvent) => void;
  loading?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: ButtonVariant;

  accessibilityLabel?: string;
  testID?: string;

  children?: React.ReactNode;
}
