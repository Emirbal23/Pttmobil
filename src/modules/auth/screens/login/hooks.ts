import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BackHandler, Keyboard, Platform, ToastAndroid } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useToast } from 'react-native-toast-notifications';
import { useTranslation } from 'react-i18next';
import type { RootStackParamList } from '@/app/navigation/types';
import * as Yup from 'yup';
import { getLoginSchema } from '@/shared/utils/validator';

export const useLogin = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const toast = useToast();

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const backPressCount = useRef(0);

  // Yup schema: dil değişince yeniden kur (hata mesajları anında değişsin)
  const loginSchema: Yup.ObjectSchema<any> = useMemo(
    () => getLoginSchema(),
    [i18n.language]
  );

  // (Opsiyonel) Formik'i dil değişiminde remount etmek istersen:
  const formikKey = i18n.language;

  // Keyboard listener
  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardOpen(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardOpen(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  // Android back double-press to exit
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS !== 'android') return () => {};

      backPressCount.current = 0;

      const onBackPress = () => {
        backPressCount.current += 1;

        if (backPressCount.current === 1) {
          const message = 'Çıkmak için tekrar geri tuşuna basın';
          try {
            toast?.show(message, { placement: 'bottom', duration: 2000, type: 'normal' });
          } catch {
            ToastAndroid.show(message, ToastAndroid.SHORT);
          }

          setTimeout(() => {
            backPressCount.current = 0;
          }, 2000);
          return true;
        }

        BackHandler.exitApp();
        return true;
      };

      const sub = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => sub.remove();
    }, [toast])
  );

  return { t, navigation, toast, loginSchema, isKeyboardOpen, formikKey } as const;
};