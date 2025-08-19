// validator.ts
import { t } from 'i18next';
import * as Yup from 'yup';

// -----------------
// Regex Constants
// -----------------
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^\+?[0-9]{10,14}$/; // accepts local 10 or E.164 11-14
export const TCKN_DIGITS_REGEX = /^\d{11}$/;

// -----------------
// Primitive Validators
// -----------------
export const isNonEmpty = (v?: string): boolean => !!(v && v.trim().length > 0);
export const isValidEmail = (email?: string): boolean => !!email && EMAIL_REGEX.test(email.trim());
export const isPhoneNumber = (phone?: string): boolean => !!phone && PHONE_REGEX.test(phone);

// Turkish ID (TCKN) checksum rules
//  - 11 digits, first digit cannot be 0
//  - 10th digit: (((d1+d3+d5+d7+d9)*7) - (d2+d4+d6+d8)) mod 10
//  - 11th digit: sum(d1..d10) mod 10
export function isValidTckno(raw?: string): boolean {
  const v = (raw || '').trim();
  if (!TCKN_DIGITS_REGEX.test(v)) return false;
  if (v[0] === '0') return false;
  const d = v.split('').map((c) => parseInt(c, 10));
  const oddSum = d[0] + d[2] + d[4] + d[6] + d[8];
  const evenSum = d[1] + d[3] + d[5] + d[7];
  const digit10 = (((oddSum * 7 - evenSum) % 10) + 10) % 10;
  const digit11 = d.slice(0, 10).reduce((a, b) => a + b, 0) % 10;
  return d[9] === digit10 && d[10] === digit11;
}

// -----------------
// Normalizers / Helpers
// -----------------
export const normalizePhone = (input: string): string => input.replace(/\D+/g, '');
export const normalizeTckno = (input: string): string => input.replace(/\D+/g, '').slice(0, 11);

// Convert local TR digits (starting with 90 or local 10) to E.164 (+90XXXXXXXXXX)
export const toE164TR = (digits: string): string => {
  const raw = normalizePhone(digits);
  if (raw.startsWith('90')) return `+${raw.slice(0, 12)}`; // 90 + 10 local
  if (raw.length === 10) return `+90${raw}`;
  return raw.startsWith('+') ? raw : raw; // leave as-is if already E.164-like or other
};

// -----------------
// Yup schema factories (DİNAMİK — i18n'le güncellenir)
// Bu fonksiyonlar her çağrıldığında t(...) güncel dili kullanır.
// -----------------
export const getEmailSchema = () =>
  Yup.string().trim().matches(EMAIL_REGEX, t('emailerrormassage')).required(t('emailerror'));

export const getPasswordSchema = () =>
  Yup.string()
    .required(t('passworderror'))
    .min(8, t('newpassrules'))
    .matches(/[A-Z]/, t('newpassrules1'))
    .matches(/[a-z]/, t('newpassrules2'))
    .matches(/\d/, t('newpassrules3'))
    .matches(/[!@#$%^&*(),.?":{}|<>]/, t('newpassrules4'));

export const getPhoneSchema = () =>
  Yup.string().required(t('phoneerror')).matches(PHONE_REGEX, t('phoneinvalid'));

// Sadece 11 hane kontrolü default. İstersen checksum testini açabilirsin.
export const getTcknoSchema = (opts?: { useChecksum?: boolean }) => {
  const useChecksum = opts?.useChecksum ?? false;
  let schema = Yup.string()
    .required(t('tcknRequired'))
    .matches(TCKN_DIGITS_REGEX, t('tcknLengthError', { requiredLength: 11 }));
  if (useChecksum) {
    schema = schema.test('tckn-checksum', t('tcknInvalid'), (val) => (val ? isValidTckno(val) : false));
  }
  return schema;
};

// Login ve Register için hazır şema üreticileri
export const getLoginSchema = () =>
  Yup.object({
    email: getEmailSchema(),
    password: Yup.string().trim().required(t('passworderror')),
  });

export const getRegisterSchema = (opts?: { useChecksumForTckn?: boolean }) =>
  Yup.object({
    nameSurname: Yup.string().trim().required(t('required')),
    tckno: getTcknoSchema({ useChecksum: !!opts?.useChecksumForTckn }),
    email: getEmailSchema(),
    password: getPasswordSchema(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('passwordmismatch'))
      .required(t('passwordconfirmerror')),
    phone: getPhoneSchema(),
  });