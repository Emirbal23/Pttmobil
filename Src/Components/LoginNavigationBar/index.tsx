import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { i18n } from '../../Config';
import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import icons from '../../Assets/icons';
import styles from './style';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const LoginNavigationBar = () => {
  const { t } = useTranslation();

  const [currentLang, setCurrentLang] = React.useState<'tr' | 'en'>('tr');

  React.useEffect(() => {
    const getLang = async () => {
      const savedLang = await AsyncStorage.getItem('userLanguage');
      const lang = savedLang === 'en' ? 'en' : 'tr';
      setCurrentLang(lang);
      await i18n.changeLanguage(lang);
    };
    getLang();
  }, []);

  const languageChange = async () => {
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setCurrentLang(newLang);
    await AsyncStorage.setItem('userLanguage', newLang);
    await i18n.changeLanguage(newLang);
  };

  return (
    <View style={styles.OutContainer}>
      <View style={styles.LogoLengContainer}>
        <View style={styles.LogoContainer}>
          <icons.PTTLogo width={wp('20%')} height={wp('10%')} />
        </View>
        <TouchableOpacity
          style={{ width: wp('7.32%') }}
          onPress={languageChange}
        >
          <Text style={styles.LanguageText}>{t('language-abstractions')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HorizantalArrow} />
    </View>
  );
};

export default LoginNavigationBar;
