// Src/shared/components/buttons/button.factory/button.factory.tsx
import React from 'react';
import BaseButton from '../base.button/base.button';
import PrimaryButton from '../primary.button/primary.button';
import SecondaryButton from '../secondary.button/secondary.button';
import type { UnifiedButtonProps } from './button.factory.props';

const ButtonFactory = (props: UnifiedButtonProps) => {
  switch (props.kind) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    case 'base':
    default:
      return <BaseButton {...props} />;
  }
};

export default ButtonFactory;