import { BaseInputProps } from '../base.input/BaseInputProps';

export type TelephoneInputProps = Omit<
  BaseInputProps,
  'keyboardType' | 'inputMode' | 'textContentType' | 'maxLength' | 'placeholderKey'
> & {
  value?: string;
  onChangeText?: (rawDigits: string) => void;
  defaultCountryTR?: boolean;
  labelKey?: string;
  placeholderKey?: BaseInputProps['placeholderKey'];
  validateOnEnd?: boolean;
  countryCode?: string;
  errorText?: string;
};
