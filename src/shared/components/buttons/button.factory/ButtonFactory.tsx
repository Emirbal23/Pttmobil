import React from 'react';
import BaseButton from '../base.button/BaseButton';
import PrimaryButton from '../primary.button/PrimaryButton';
import type { UnifiedButtonProps } from './ButtonFactoryProps';

const ButtonFactory = (props: UnifiedButtonProps) => {
  switch (props.kind) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'base':
    default:
      return <BaseButton {...props} />;
  }
};

export default ButtonFactory;
