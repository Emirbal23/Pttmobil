import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './Lang/en.json';
import tr from './Lang/tr.json';

const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

const initI18n = async () => {
  const savedLanguage = await AsyncStorage.getItem('userLanguage');

  await i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage || 'tr',
    fallbackLng: 'tr',
    interpolation: { escapeValue: false },
  });
};

export { i18n, initI18n };
