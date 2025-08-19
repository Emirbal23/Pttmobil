import { BaseInputProps, IconComponent } from '../base.input/BaseInputProps';

export type EmailInputProps = Omit<
  BaseInputProps,
  'keyboardType' | 'autoCapitalize' | 'labelKey' | 'placeholderKey'
> & {
  labelKey?: string;
  placeholderKey?: string;
  leftIcon?: IconComponent;
};
