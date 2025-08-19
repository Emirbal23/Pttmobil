import { useEffect, useMemo, useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import type { RootStackParamList } from '@/app/navigation/types';
import { getRegisterSchema } from '@/shared/utils/validator';

export type RegisterValues = {
  nameSurname: string;
  tckno: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export const useRegister = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardOpen(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardOpen(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  // Dil değiştiğinde Yup şema yeniden kurulsun (hata mesajları güncel dilde gelsin)
  const registerSchema: Yup.ObjectSchema<any> = useMemo(
    () => getRegisterSchema({ useChecksumForTckn: false }), // gerekirse true yap
    [i18n.language]
  );

  // İstersen Formik'e key verip tamamen remount etmek için kullan
  const formikKey = i18n.language;

  return { t, navigation, isKeyboardOpen, registerSchema, formikKey } as const;
};
