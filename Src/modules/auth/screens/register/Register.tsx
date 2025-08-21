import React from 'react';
import { View } from 'react-native';
import styles from './style';
import icons from '@/assets/icons';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import Stepper from '@/shared/components/stepper/Stepper';
import { ButtonFactory } from '@/shared/components/buttons';
import { InputFactory } from '@/shared/components/inputs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Formik } from 'formik';
import { useRegister } from './hooks';

export type RegisterValues = {
  nameSurname: string;
  tckno: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

const initialValues: RegisterValues = {
  nameSurname: '',
  tckno: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
};

const Register: React.FC = () => {
  const { t, navigation, isKeyboardOpen, registerSchema } = useRegister();

  return (
    <ScreenBackground variant="detail" title={t('Register')}>
      <KeyboardAwareScrollView
        scrollEnabled={isKeyboardOpen}
        keyboardShouldPersistTaps="handled"
        bottomOffset={80}
        extraKeyboardSpace={150}
      >
        <Stepper icon={<icons.stepper />} text={t('personalInformation')} />
        <Formik<RegisterValues>
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={() => navigation.navigate('RegisterNext')}
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
            setFieldError,
          }) => (
            <>
              <View style={styles.ForumOutContainer}>
                <View style={styles.Forum}>
                  {/* Ad Soyad */}
                  <InputFactory
                    kind="base"
                    labelKey="namesurnamesubtitle"
                    placeholderKey="namesurnameholder"
                    value={values.nameSurname}
                    onChangeText={handleChange('nameSurname')}
                    onBlur={handleBlur('nameSurname')}
                    errorText={
                      touched.nameSurname
                        ? (errors.nameSurname as string)
                        : undefined
                    }
                  />

                  {/* TCKNO */}
                  <InputFactory
                    kind="tckno"
                    value={values.tckno}
                    onChangeText={handleChange('tckno')}
                    onBlur={handleBlur('tckno')}
                    errorText={
                      touched.tckno ? (errors.tckno as string) : undefined
                    }
                    validateOnEnd
                  />

                  {/* Email */}
                  <InputFactory
                    kind="email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    errorText={
                      touched.email ? (errors.email as string) : undefined
                    }
                  />

                  {/* Şifre */}
                  <InputFactory
                    kind="password"
                    mode="newpass"
                    value={values.password}
                    onChangeText={(text: string) => {
                      handleChange('password')(text);
                      // Şifre değiştiğinde, eğer confirmPassword doluysa eşleşme kontrolü yap
                      if (values.confirmPassword) {
                        if (text !== values.confirmPassword) {
                          // Formik error'ını anlık set et
                          setFieldError(
                            'confirmPassword',
                            t('passwordmismatch'),
                          );
                        } else {
                          setFieldError('confirmPassword', undefined as any);
                        }
                      }
                    }}
                    onBlur={handleBlur('password')}
                    errorText={
                      touched.password ? (errors.password as string) : undefined
                    }
                  />

                  {/* Şifre (Tekrar) */}
                  <InputFactory
                    kind="password"
                    mode="newpass"
                    labelKey="newpassconfirmsubtitle"
                    placeholderKey="newpassconfirmholder"
                    value={values.confirmPassword}
                    onChangeText={(text: string) => {
                      handleChange('confirmPassword')(text);
                      if (!text) {
                        setFieldError(
                          'confirmPassword',
                          t('passwordconfirmerror'),
                        );
                      } else if (text !== values.password) {
                        setFieldError('confirmPassword', t('passwordmismatch'));
                      } else {
                        setFieldError('confirmPassword', undefined as any);
                      }
                    }}
                    onBlur={handleBlur('confirmPassword')}
                    errorText={
                      touched.confirmPassword
                        ? (errors.confirmPassword as string)
                        : undefined
                    }
                  />

                  {/* Telefon */}
                  <InputFactory
                    kind="telephone"
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    errorText={
                      touched.phone ? (errors.phone as string) : undefined
                    }
                    defaultCountryTR
                  />
                </View>
              </View>

              <ButtonFactory
                kind="primary"
                labelKey="continue"
                onPress={handleSubmit as any}
                disabled={!isValid || isSubmitting}
              />
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </ScreenBackground>
  );
};

export default Register;
