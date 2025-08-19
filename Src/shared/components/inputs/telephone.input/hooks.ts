import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputFocusEventData,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { isPhoneNumber } from '@/shared/utils/validator';

// Keep only digits
const onlyDigits = (v: string) => (v || '').replace(/\D+/g, '');

function splitCountryAndLocal(digits: string) {
  // If value starts with 90, treat it as TR country code
  if (digits.startsWith('90')) return { cc: '90', local: digits.slice(2) };
  return { cc: '', local: digits };
}

function formatLocal10(local: string) {
  const d = local.slice(0, 10);
  const len = d.length;
  if (!len) return '';

  let out = '';
  // (xxx)
  out += len <= 3 ? `(${d}` : `(${d.slice(0, 3)})`;
  // space + next 3
  if (len > 3) out += ` ${d.slice(3, Math.min(6, len))}`;
  // space + next 2
  if (len > 6) out += ` ${d.slice(6, Math.min(8, len))}`;
  // space + last 2
  if (len > 8) out += ` ${d.slice(8, Math.min(10, len))}`;

  return out;
}

function formatDisplay(input: string): { display: string; rawDigits: string } {
  const raw = onlyDigits(input);
  const { cc, local } = splitCountryAndLocal(raw);
  const localFmt = formatLocal10(local);
  const display = cc ? `+${cc} ${localFmt}`.trim() : localFmt;
  // Cap raw digits to 12 when starting with '90' (cc + 10 local), else to 10
  const capped = cc ? `${cc}${local.slice(0, 10)}` : local.slice(0, 10);
  return { display, rawDigits: capped };
}

function getTextFromEvent(e: any): string {
  if (typeof e === 'string') return e;
  return e?.nativeEvent?.text ?? '';
}

export const useTelephoneFormatting = ({
  value,
  onChangeText,
  defaultCountryTR,
  validateOnEnd,
}: {
  value?: string;
  onChangeText?: (text: string) => void;
  defaultCountryTR?: boolean;
  validateOnEnd?: boolean;
}) => {
  const { t, i18n } = useTranslation();

  const [innerDigits, setInnerDigits] = useState<string>('');
  const [localError, setLocalError] = useState<string | undefined>(undefined);
  const lastValueRef = useRef<string>('');

  const effectiveValue = value ?? innerDigits;

  const displayValue = useMemo(() => {
    if (!effectiveValue) return '';
    return formatDisplay(effectiveValue).display;
  }, [effectiveValue]);

  const emit = useCallback(
    (rawDigits: string) => {
      lastValueRef.current = rawDigits;
      if (onChangeText) onChangeText(rawDigits);
      else setInnerDigits(rawDigits);
    },
    [onChangeText],
  );

  const handleChangeText = useCallback(
    (text: string) => {
      if (localError) setLocalError(undefined);
      const { rawDigits } = formatDisplay(text);
      emit(rawDigits);
    },
    [emit, localError],
  );

  const handleFocus = useCallback(() => {
    if (defaultCountryTR && !(value ?? innerDigits)) {
      emit('90');
    }
  }, [defaultCountryTR, value, innerDigits, emit]);

  const computeValidation = useCallback(
    (inputText?: string): string | undefined => {
      const raw = formatDisplay(inputText || '').rawDigits;
      // Accept both 10-digit local or 12-digit with cc '90'
      const normalized = raw.startsWith('90') ? `+${raw}` : raw;
      if (!raw) return t('phoneerror');
      if (!isPhoneNumber(normalized)) return t('phoneinvalid');
      return undefined;
    },
    [t],
  );

  const handleEndEditing = useCallback(
    (e: NativeSyntheticEvent<TextInputEndEditingEventData> | string) => {
      if (!validateOnEnd) return;
      const nextErr = computeValidation(getTextFromEvent(e));
      setLocalError(nextErr);
      return nextErr;
    },
    [validateOnEnd, computeValidation],
  );

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData> | string) => {
      if (!validateOnEnd) return;
      const nextErr = computeValidation(getTextFromEvent(e));
      setLocalError(nextErr);
      return nextErr;
    },
    [validateOnEnd, computeValidation],
  );

  // Re-translate current error when language changes
  useEffect(() => {
    if (localError !== undefined) {
      const nextErr = computeValidation(lastValueRef.current);
      setLocalError(nextErr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return {
    displayValue,
    handleChangeText,
    handleFocus,
    handleEndEditing,
    handleBlur,
    localError,
  } as const;
};