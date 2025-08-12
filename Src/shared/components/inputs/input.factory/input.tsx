

import React from 'react';
import BaseInput from '../base.input/base.input';
import EmailInput from '../email.input/email.input';
import PasswordInput from '../password.input/password.input';
import type { UnifiedInputProps } from './input.factory.props';


const Input = (props: UnifiedInputProps) => {
  switch (props.kind) {
    case 'email':
      return <EmailInput {...props} />;
    case 'password':
      return <PasswordInput {...props} />;
    case 'base':
    default:
      return <BaseInput {...props} />;
  }
};

export default Input;
