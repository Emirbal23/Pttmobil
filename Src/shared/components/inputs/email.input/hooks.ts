import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputFocusEventData,
} from 'react-native';
import { isValidEmail } from '@/shared/utils/validator';

export const useEmailValidation = () => {
  const { t, i18n } = useTranslation();
  const [error, setError] = useState<string | undefined>(undefined);

  // --- Email kontrolü ---
  const validateText = useCallback(
    (value?: string): string | undefined => {
      const text = value?.trim() ?? '';
      if (text.length === 0) return t('emailerror');
      if (!isValidEmail(text)) return t('emailerrormassage');
      return undefined;
    },
    [t]
  );

  // Dil değiştiğinde hata mesajını da güncelle
  useEffect(() => {
    if (error) {
      setError((prev) => (prev ? validateText(undefined) : undefined));
    }
  }, [i18n.language]);

  // --- Handlers ---
  const handleChangeText = useCallback(
    (text: string) => {
      if (error) setError(undefined);
      return text;
    },
    [error]
  );

  const handleEndEditingEvent = useCallback(
    (e: NativeSyntheticEvent<TextInputEndEditingEventData> | string) => {
      const text = typeof e === 'string' ? e : e.nativeEvent.text;
      const nextErr = validateText(text);
      setError(nextErr);
      return nextErr;
    },
    [validateText]
  );

  const handleBlurEvent = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData> | string) => {
      const text = typeof e === 'string' ? e : (e as any)?.nativeEvent?.text;
      const nextErr = validateText(text);
      setError(nextErr);
      return nextErr;
    },
    [validateText]
  );

  return {
    error,
    setError,
    validateText,
    handleChangeText,
    handleEndEditingEvent,
    handleBlurEvent,
  } as const;
};