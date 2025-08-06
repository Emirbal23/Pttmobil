import { useTranslation } from 'react-i18next';
import { i18n } from '../../Config';
import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import icons from '../../Assets/icons';
import styles from './style';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Login = () => {
  const { t } = useTranslation();

  const languageChange = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <View style={styles.OutContainer}>
      <View style={styles.LogoLengContainer}>
        <View style={styles.LogoContainer}>
          <icons.PTTLogo width={wp('20%')} height={wp('10%')} />
        </View>
        <TouchableOpacity style={{width: wp('7.32%')}} onPress={languageChange}>
          <Text style={styles.LanguageText}>{t('language-abstractions')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HorizantalArrow} />
    </View>
  );
};

export default Login;
