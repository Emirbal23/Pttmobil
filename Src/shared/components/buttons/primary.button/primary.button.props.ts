import type { BaseButtonProps } from '../base.button/base.button.props';
import type { GestureResponderEvent } from 'react-native';

export interface PrimaryButtonProps
  extends Omit<BaseButtonProps, 'onPress' | 'label'> {
  labelKey?: string;
  label?: string;
  targetScreen?: string;
  onPress: (event?: GestureResponderEvent) => void;
}
