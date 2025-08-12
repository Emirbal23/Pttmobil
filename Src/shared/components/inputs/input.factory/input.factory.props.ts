import { BaseInputProps } from '../base.input/base.input.props';
import { EmailInputProps } from '../email.input/email.input.props';
import { PasswordInputProps } from '../password.input/password.input.props';

export type InputKinds = 'base' | 'email' | 'password';

export type UnifiedInputProps =
  | (BaseInputProps & { kind: 'base' })
  | (EmailInputProps & { kind: 'email' })
  | (PasswordInputProps & { kind: 'password' });