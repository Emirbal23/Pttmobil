import { BaseInputProps, IconComponent } from '../base.input/base.input.props';

/**
 * Props specific to EmailInput component
 * - Inherits all BaseInputProps except keyboardType & autoCapitalize
 * - Optional leftIcon to override default email icon
 */
export type EmailInputProps = Omit<
  BaseInputProps,
  'keyboardType' | 'autoCapitalize'
> & {
  /** Optional left icon component for email input */
  leftIcon?: IconComponent;
};
