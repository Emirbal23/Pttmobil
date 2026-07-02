import React from 'react';
import {
  BaseInput,
  EmailInput,
  PasswordInput,
  TelephoneInput,
  TcknoInput,
} from '..';
import type { UnifiedInputProps } from './InputFactoryProps';

const InputFactory = (props: UnifiedInputProps) => {
  switch (props.kind) {
    case 'email':
      return <EmailInput {...props} />;
    case 'password':
      return <PasswordInput {...props} />;
    case 'telephone':
      return <TelephoneInput {...props} />;
    case 'tckno':
      return <TcknoInput {...props} />;
    case 'base':
    default:
      return (
        <BaseInput {...props} placeholderKey={props.placeholderKey ?? ''} />
      );
  }
};

export default InputFactory;
