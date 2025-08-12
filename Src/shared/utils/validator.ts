import { t } from "i18next";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isNonEmpty = (v?: string): boolean =>
  !!(v && v.trim().length > 0);

export const isValidEmail = (email?: string): boolean =>
  !!email && EMAIL_REGEX.test(email.trim());


export function isStrongPassword(password: string): string | undefined {
  if (!password || password.trim().length === 0) {
    return t('passworderror');
  }
  if (password.length < 8) {
    return t('newpassrules');
  }
  if (!/[A-Z]/.test(password)) {
    return t('newpassrules1');
  }
  if (!/[a-z]/.test(password)) {
    return t('newpassrules2');
  }
  if (!/\d/.test(password)) {
    return t('newpassrules3');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return t('newpassrules4');
  }
  return undefined;
}

export const isPhoneNumber = (phone?: string): boolean =>
  !!phone && /^\+?[0-9]{10,14}$/.test(phone);
