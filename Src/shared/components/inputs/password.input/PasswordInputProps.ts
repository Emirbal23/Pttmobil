import type {
  BaseInputProps,
  IconComponent,
} from '../base.input/BaseInputProps';

export type PasswordInputProps = Omit<
  BaseInputProps,
  | 'secureTextEntry'
  | 'leftIcon'
  | 'rightIcon'
  | 'autoCapitalize'
  | 'keyboardType'
  | 'inputMode'
> & {
  labelKey?: string;
  placeholderKey?: string;
  leftIcon?: IconComponent;
  mode : 'login' | 'register' | 'newpass';
};
