import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {  } from 'react';
import { ButtonFactory } from '@/shared/components/buttons';
import { InputFactory } from '@/shared/components/inputs';
import { LoginBackground, Subtitle } from '../../components';
import styles from './style';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useLogin } from './hooks';

const Login = () => {
  const { t, navigation, loginSchema, isKeyboardOpen } = useLogin();
  return (
    <LoginBackground>
      <KeyboardAwareScrollView
        scrollEnabled={isKeyboardOpen}
        keyboardShouldPersistTaps="handled"
        bottomOffset={50}
        extraKeyboardSpace={150}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={() => navigation.navigate('ForgotPassword')}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            isSubmitting,
          }) => (
            <View style={{ flex: 1 }}>
              <Subtitle type="login" />

              <InputFactory
                kind="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                errorText={touched.email ? (errors.email as string) : undefined}
                testID="login-email"
              />

              <InputFactory
                kind="password"
                mode="login"
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
                    onPress={() => navigation.navigate('ForgotPassword')}
                  >
                    <Text style={styles.ForgetPassText}>{t('forgot')}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <ButtonFactory
                kind="primary"
                labelKey="login"
                onPress={handleSubmit as any}
                disabled={!isValid || isSubmitting}
                targetScreen="ForgotPassword"
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
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                      >
                        <Text style={styles.RegisterText}>{t('Register')}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </LoginBackground>
  );
};

export default Login;
