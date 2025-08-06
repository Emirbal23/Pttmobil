import { useTranslation } from 'react-i18next';
import { Text, View, ImageBackground } from 'react-native';
import React from 'react';
import images from '../../Assets/images';
import styles from './style';

const Login = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.Container}>
      <ImageBackground
        source={images.LoginBackground}
        style={styles.BackGround}
      >
        <Text style={styles.WelcomeText}>{t('welcome')}</Text>
      </ImageBackground>
    </View>
  );
};

export default Login;
