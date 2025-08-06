import { useTranslation } from 'react-i18next';
import { i18n } from '../../../Config';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  LoginNavigationBar,
  LoginSubtitle,
  LoginEntry,
} from '../../../Components';
import images from '../../../Assets/images';
import icons from '../../../Assets/icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { RouterNames } from '../../../Config';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';

import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useCallback } from 'react';
useFocusEffect(
  useCallback(() => {
    const onBackPress = () => {
      return true; // Geri gitmeyi engeller
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, []),
);

type RootStackParamList = {
  Login: undefined;
};

const windowWidth = Dimensions.get('window').width;

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  return (
    <View style={styles.BackGround}>
      <SafeAreaView style={{ flex: 1 }}>
        <LoginNavigationBar />
        <View style={styles.Container}>
          <ImageBackground
            source={images.LoginBackground}
            style={styles.BackGroundContainer}
          >
            <Text style={styles.WelcomeText}>{t('welcome')}</Text>
          </ImageBackground>
          <View style={styles.WhiteContainer}>
            <LoginSubtitle type="login" />
            <LoginEntry
              iconType="user"
              labelKey="emailsubtitle"
              placeholderKey="emailholder"
            />
            <LoginEntry
              iconType="pass"
              labelKey="passsubtitle"
              placeholderKey="passholder"
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
