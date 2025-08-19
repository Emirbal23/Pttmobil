// Src/shared/components/buttons/button.factory/button.factory.props.ts
import type { BaseButtonProps } from '../base.button/BaseButtonProps';
import type { PrimaryButtonProps } from '../primary.button/PrimaryButtonProps';

export type ButtonKind = 'base' | 'primary' | 'secondary';

export type UnifiedButtonProps =
  | (BaseButtonProps & { kind: 'base' })
  | (PrimaryButtonProps & { kind: 'primary' });
