import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './locales/en.json';
import tr from './locales/tr.json';



const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

const initI18n = async () => {
  const savedLanguage = await AsyncStorage.getItem('userLanguage');

  let languageToUse;

  if (savedLanguage) {
    languageToUse = savedLanguage;
  } else {
    const deviceLocale = Intl.DateTimeFormat().resolvedOptions().locale || 'en-US';
    const baseLanguage = deviceLocale.split('-')[0].toLowerCase();
    if (baseLanguage === 'tr' || baseLanguage === 'en') {
      languageToUse = baseLanguage;
    } else {
      languageToUse = 'en';
    }
    await AsyncStorage.setItem('userLanguage', languageToUse); // Save as initial preference
  }

  await i18n.use(initReactI18next).init({
    resources,
    lng: languageToUse,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });
};

export { i18n, initI18n };
