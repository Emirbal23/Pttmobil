import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

import en from './Lang/en.json';
import tr from './Lang/tr.json';

const getDeviceLanguage = (): 'tr' | 'en' => {
  let locale: string | undefined;

  if (Platform.OS === 'ios') {
    locale =
      NativeModules.SettingsManager?.settings?.AppleLocale ||
      NativeModules.SettingsManager?.settings?.AppleLanguages?.[0];
  } else if (Platform.OS === 'android') {
    locale = NativeModules.I18nManager?.localeIdentifier;
  }

  const langCode = locale?.split(/[-_]/)[0]?.toLowerCase();
  if (langCode === 'tr') return 'tr';
  if (langCode === 'en') return 'en';
  return 'tr'; // fallback
};

i18n
  .use(initReactI18next)
  .init({
    lng: getDeviceLanguage(),
    fallbackLng: 'tr',
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;