import { Text, View, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { ButtonFactory } from '@/shared/components/buttons';
import { InputFactory } from '@/shared/components/inputs';
import { ScreenBackground, NavigationBar, Subtitle } from '../../components';

import images from '@/assets/images';
import styles from './style';

import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import * as Yup from 'yup';

import type { RootStackParamList } from '@/app/navigation/types';

const Login = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email(t('emailerrormassage'))
      .required(t('emailerror')),
    password: Yup.string().trim().required(t('passworderror')),
  });

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true;
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );
      return () => subscription.remove();
    }, []),
  );

  return (
    <ScreenBackground
      backgroundSource={images.LoginBackground}
      nav={<NavigationBar />}
      headerContent={<Text style={styles.WelcomeText}>{t('welcome')}</Text>}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={() => {
          navigation.navigate('ForgetPass');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <View style={{ flex: 1 }}>
            <Subtitle type="login" />

            <InputFactory
              kind="email"
              placeholderKey="emailholder"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              errorText={touched.email ? (errors.email as string) : undefined}
              testID="login-email"
            />

            <InputFactory
              kind="password"
              placeholderKey="passholder"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              errorText={
                touched.password ? (errors.password as string) : undefined
              }
              testID="login-password"
            />

            <View style={styles.ForgotPassOutContainer}>
              <View style={styles.ForgetPassContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgetPass')}
                >
                  <Text style={styles.ForgetPassText}>{t('forget')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ButtonFactory
              kind="primary"
              labelKey="login"
              onPress={handleSubmit as any}
              targetScreen="ForgetPass"
              testID="login-submit"
            />

            <View style={styles.BottomTextOutContainer}>
              <View style={styles.BottomAllTextContainer}>
                <View style={styles.ContinueWithoutContainer}>
                  <TouchableOpacity>
                    <Text style={styles.ContinueWithhoutText}>
                      {t('ContinueWithoutLogin')}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.RegisterOutContainer}>
                  <Text style={styles.RegisterQuestText}>
                    {t('AreYouNotMember')}
                  </Text>
                  <View style={styles.RegisterContainer}>
                    <TouchableOpacity>
                      <Text style={styles.RegisterText}>{t('Register')}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScreenBackground>
  );
};

export default Login;
