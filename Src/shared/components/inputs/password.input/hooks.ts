import { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputFocusEventData,
} from 'react-native';
import { getPasswordSchema } from '@/shared/utils/validator';
import type { ValidationError } from 'yup';

export type PasswordMode = 'login' | 'register' | 'newpass';

export const usePasswordValidation = (mode: PasswordMode = 'login') => {
  const { t, i18n } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const toggleVisible = useCallback(() => setVisible(v => !v), []);

  // Rebuild schema when language or mode changes so messages follow current locale
  const schema = useMemo(() => {
    if (mode === 'login') return null; // login: only required check
    return getPasswordSchema();
  }, [mode, i18n.language]);

  const handleChangeText = useCallback(
    (text: string) => {
      if (error) setError(undefined);
      return text;
    },
    [error],
  );

  const validateText = useCallback(
    (raw?: string): string | undefined => {
      const text = raw?.trim() ?? '';

      if (mode === 'login') {
        return !text ? t('ui.passworderror') : undefined;
      }

      try {
        schema?.validateSync(text, { abortEarly: false });
        return undefined;
      } catch (e) {
        const ve = e as ValidationError;
        // show first error; you can join with ve.errors.join('\n') if needed
        return ve?.errors?.[0] ?? t('ui.newpassrules');
      }
    },
    [mode, schema, t],
  );

  const handleEndEditingEvent = useCallback(
    (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
      const nextErr = validateText(e?.nativeEvent?.text);
      setError(nextErr);
      return nextErr;
    },
    [validateText],
  );

  const handleBlurEvent = useCallback(
    (
      e:
        | NativeSyntheticEvent<TextInputFocusEventData>
        | { nativeEvent?: { text?: string } },
    ) => {
      const nextErr = validateText((e as any)?.nativeEvent?.text);
      setError(nextErr);
      return nextErr;
    },
    [validateText],
  );

  return {
    visible,
    toggleVisible,
    error,
    setError,
    handleChangeText,
    handleEndEditingEvent,
    handleBlurEvent,
  } as const;
};
