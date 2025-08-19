import { BaseInputProps } from '../base.input/BaseInputProps';

export type TcknoInputProps = Omit<
  BaseInputProps,
  'keyboardType' | 'inputMode' | 'textContentType' | 'maxLength' | 'placeholderKey'
> & {
  /** Mevcut TCKN değeri */
  value?: string;
  /** Değer değiştiğinde sadece rakamlar döner */
  onChangeText?: (digits: string) => void;
  /** TCKN minimum uzunluk (default 11) */
  requiredLength?: number;
  /** Blur veya endEditing sonrası otomatik doğrulama */
  validateOnEnd?: boolean;
  /** Hata mesajı dışarıdan gelirse override eder */
  errorText?: string;
  /** Localization için placeholder key */
  placeholderKey?: BaseInputProps['placeholderKey'];
};