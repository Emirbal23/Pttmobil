import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import icons from '@/assets/icons';
import styles from './style';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const LANGUAGE_STORAGE_KEY = 'userLanguage';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = React.useState<'tr' | 'en'>('tr');

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        const lang: 'tr' | 'en' = saved === 'en' ? 'en' : 'tr';
        if (!mounted) return;
        setCurrentLang(lang);
        await i18n.changeLanguage(lang);
      } catch (e) {
        console.warn('Language load failed', e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [i18n]);

  const languageChange = React.useCallback(async () => {
    try {
      const newLang: 'tr' | 'en' = currentLang === 'tr' ? 'en' : 'tr';
      setCurrentLang(newLang);
      await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
      await i18n.changeLanguage(newLang);
    } catch (e) {
      console.warn('Language change failed', e);
    }
  }, [currentLang, i18n]);

  return (
    <View style={styles.OutContainer}>
      <View style={styles.LogoLengContainer}>
        <View style={styles.LogoContainer}>
          <icons.PTTLogo width={wp('20%')} height={wp('10%')} />
        </View>

        <TouchableOpacity
          style={{ width: wp('7.32%') }}
          onPress={languageChange}
          accessibilityRole="button"
          accessibilityLabel={t('language-abstractions')}
          accessibilityHint={t('language-abstractions')}
        >
          <Text style={styles.LanguageText}>{t('language-abstractions')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HorizantalArrow} />
    </View>
  );
};

export default NavigationBar;