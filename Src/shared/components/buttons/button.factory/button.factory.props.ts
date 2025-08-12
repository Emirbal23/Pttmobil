// Src/shared/components/buttons/button.factory/button.factory.props.ts
import type { BaseButtonProps } from '../base.button/base.button.props';
import type { PrimaryButtonProps } from '../primary.button/primary.button.props';
import type { SecondaryButtonProps } from '../secondary.button/secondary.button.props';

export type ButtonKind = 'base' | 'primary' | 'secondary';

export type UnifiedButtonProps =
  | (BaseButtonProps & { kind: 'base' })
  | (PrimaryButtonProps & { kind: 'primary' })
  | (SecondaryButtonProps & { kind: 'secondary' });