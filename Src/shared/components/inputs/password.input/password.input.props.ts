import type {
  BaseInputProps,
  IconComponent,
} from '../base.input/base.input.props';

export type PasswordInputProps = Omit<
  BaseInputProps,
  | 'secureTextEntry'
  | 'leftIcon'
  | 'rightIcon'
  | 'autoCapitalize'
  | 'keyboardType'
  | 'inputMode'
> & {
  leftIcon?: IconComponent;
  mode?: 'login' | 'register' | 'newpass';
};
