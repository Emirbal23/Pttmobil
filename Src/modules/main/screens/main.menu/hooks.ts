import { useCallback, useEffect, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';
import images from '@/assets/images';
import { useFocusEffect } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { BackHandler, Platform, ToastAndroid } from 'react-native';

export function useImageSlider() {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  const toast = useToast();
  const backPressCount = useRef(0);

  const slides = [
    images.MainMenu,
    (images as Record<string, unknown>)?.MainMenu2 ?? images.MainMenu,
    (images as Record<string, unknown>)?.MainMenu3 ?? images.MainMenu,
  ] as const;

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
            toast?.show(message, {
              placement: 'bottom',
              duration: 2000,
              type: 'normal',
            });
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

      const sub = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );
      return () => sub.remove();
    }, [toast]),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (page + 1) % slides.length;
      if (pagerRef.current) {
        try {
          pagerRef.current.setPage(next);
        } catch {}
      }
      setPage(next);
    }, 3500);
    return () => clearInterval(interval);
  }, [page, slides.length]);

  return { pagerRef, page, setPage, slides };
}
