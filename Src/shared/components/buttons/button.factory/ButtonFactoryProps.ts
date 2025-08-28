import type { BaseButtonProps } from '../base.button/BaseButtonProps';
import type { PrimaryButtonProps } from '../primary.button/PrimaryButtonProps';

export type ButtonKind = 'base' | 'primary' ;

export type UnifiedButtonProps =
  | (BaseButtonProps & { kind: 'base' })
  | (PrimaryButtonProps & { kind: 'primary' });
