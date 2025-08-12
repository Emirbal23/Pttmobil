export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isNonEmpty = (v?: string): boolean =>
  !!(v && v.trim().length > 0);

export const isValidEmail = (email?: string): boolean =>
  !!email && EMAIL_REGEX.test(email.trim());

export const isStrongPassword = (pass?: string): boolean =>
  !!pass && pass.length >= 8 && /[A-Z]/.test(pass) && /\d/.test(pass);

export const isPhoneNumber = (phone?: string): boolean =>
  !!phone && /^\+?[0-9]{10,14}$/.test(phone);