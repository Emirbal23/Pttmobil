import { BaseInputProps } from '../base.input/BaseInputProps';
import { EmailInputProps } from '../email.input/EmailInputProps';
import { PasswordInputProps } from '../password.input/PasswordInputProps';
import { TelephoneInputProps } from '../telephone.input/TelephoneInputProps';
import { TcknoInputProps } from '../tckno.input/TcknoInputProps';

export type InputKinds = 'base' | 'email' | 'password' | 'telephone' | 'tckno';

export type UnifiedInputProps =
  | ({ kind: 'email' } & EmailInputProps)
  | ({ kind: 'password' } & PasswordInputProps)
  | ({ kind: 'telephone' } & TelephoneInputProps)
  | ({ kind: 'base' } & BaseInputProps)
  | ({ kind: 'tckno' } & TcknoInputProps);
