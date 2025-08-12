

import type { BaseButtonProps } from '../base.button/base.button.props';

export interface PrimaryButtonProps extends BaseButtonProps {
  targetScreen: string; // the name of the screen to navigate to
}