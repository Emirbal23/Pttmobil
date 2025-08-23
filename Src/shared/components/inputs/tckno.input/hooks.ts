import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputFocusEventData,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { isValidTckno as checksumValidate } from '@/shared/utils/validator';

export type TcknoHookOptions = {
  requiredLength?: number; // default 11
  useChecksum?: boolean; // default false (sadece uzunluk kontrolü)
};

type TcknoInputEvent =
  | NativeSyntheticEvent<TextInputEndEditingEventData>
  | NativeSyntheticEvent<TextInputFocusEventData>
  | string
  | null
  | undefined;

function getTextFromEvent(e: TcknoInputEvent): string {
  if (typeof e === 'string') return e;
  if (!e) return '';
  const ne = (e as NativeSyntheticEvent<TextInputEndEditingEventData>).nativeEvent;
  const txt = (ne as TextInputEndEditingEventData).text;
  return typeof txt === 'string' ? txt : '';
}

function toDigitsCap(v: string, cap: number) {
  return (v || '').replace(/\D+/g, '').slice(0, cap);
}

export function useTcknoValidation(optionsOrLen?: number | TcknoHookOptions) {
  // Backward compatible param parsing
  const opts: TcknoHookOptions = useMemo(() => {
    if (typeof optionsOrLen === 'number')
      return { requiredLength: optionsOrLen };
    return optionsOrLen ?? {};
  }, [optionsOrLen]);

  const requiredLength = opts.requiredLength ?? 11;
  const useChecksum = opts.useChecksum ?? false;

  const { t, i18n } = useTranslation();

  const [error, setError] = useState<string | undefined>(undefined);
  const lastValueRef = useRef<string>(''); // dil değişiminde hatayı yeniden hesaplamak için

  const computeError = useCallback(
    (raw?: string): string | undefined => {
      const value = (raw ?? '').trim();
      if (!value) return t('ui.tcknRequired');
      if (value.length !== requiredLength)
        return t('ui.tcknLengthError', { requiredLength });
      if (useChecksum && !checksumValidate(value)) return t('ui.tcknInvalid');
      return undefined;
    },
    [requiredLength, useChecksum, t],
  );

  const validateValue = useCallback(
    (raw?: string) => {
      const val = (raw ?? '').trim();
      lastValueRef.current = val;
      const nextErr = computeError(val);
      setError(nextErr);
      return !nextErr;
    },
    [computeError],
  );

  // Dil değişince mevcut hata metnini anında güncelle
  useEffect(() => {
    if (error !== undefined) {
      const nextErr = computeError(lastValueRef.current);
      setError(nextErr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const handleChangeText = useCallback(
    (text: string) => {
      const digits = toDigitsCap(text, requiredLength);
      lastValueRef.current = digits;
      if (error) setError(undefined);
      return digits;
    },
    [error, requiredLength],
  );

  const handleBlurEvent = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData> | string) => {
      const next = validateValue(getTextFromEvent(e));
      return next;
    },
    [validateValue],
  );

  const handleEndEditingEvent = useCallback(
    (e: NativeSyntheticEvent<TextInputEndEditingEventData> | string) => {
      const next = validateValue(getTextFromEvent(e));
      return next;
    },
    [validateValue],
  );

  return {
    error,
    setError,
    handleChangeText,
    handleBlurEvent,
    handleEndEditingEvent,
    validateValue,
    requiredLength,
    useChecksum,
  } as const;
}
