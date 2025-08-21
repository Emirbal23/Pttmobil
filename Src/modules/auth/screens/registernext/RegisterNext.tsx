import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import icons from '@/assets/icons';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import Stepper from '@/shared/components/stepper/Stepper';
import { ButtonFactory } from '@/shared/components/buttons';
import { InputFactory } from '@/shared/components/inputs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '@/app/navigation/types';
import colors from '@/shared/theme/color';

export type RegisterNextValues = {
  country: string;
  province: string;
  district: string;
  adress: string;
  agreeTerms: boolean;
  agreeKvkk: boolean;
};

const initialValues: RegisterNextValues = {
  country: '',
  province: '',
  district: '',
  adress: '',
  agreeTerms: false,
  agreeKvkk: false,
};

const RegisterNext: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const validate = useMemo(
    () => (values: RegisterNextValues) => {
      const errors: Partial<Record<keyof RegisterNextValues, string>> = {};
      if (!values.country?.trim()) errors.country = t('required');
      if (!values.province?.trim()) errors.province = t('required');
      if (!values.district?.trim()) errors.district = t('required');
      if (!values.adress?.trim()) errors.adress = t('required');
      if (!values.agreeTerms) (errors as any).agreeTerms = t('required');
      if (!values.agreeKvkk) (errors as any).agreeKvkk = t('required');
      return errors;
    },
    [t],
  );

  return (
    <ScreenBackground variant="detail" title={t('Register')}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        bottomOffset={80}
        extraKeyboardSpace={150}
      >
        <Stepper icon={<icons.stepper2 />} text={t('adressInformation')} />

        <Formik<RegisterNextValues>
          initialValues={initialValues}
          validate={validate}
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
            setFieldValue,
            setFieldTouched,
            submitCount,
          }) => {
            const checkedTerms = !!values.agreeTerms;
            const showTermsError =
              !!(errors as any).agreeTerms &&
              (submitCount > 0 || touched.agreeTerms);
            const checkedKvkk = !!values.agreeKvkk;
            const showKvkkError =
              !!(errors as any).agreeKvkk &&
              (submitCount > 0 || touched.agreeKvkk);
            return (
              <>
                <View style={styles.ForumOutContainer}>
                  <View style={styles.Forum}>
                    <InputFactory
                      kind="base"
                      labelKey="countrysubtitle"
                      placeholderKey="countryholder"
                      value={values.country}
                      onChangeText={handleChange('country')}
                      onBlur={handleBlur('country')}
                      errorText={
                        touched.country ? (errors.country as string) : undefined
                      }
                    />

                    <InputFactory
                      kind="base"
                      labelKey="provincesubtitle"
                      placeholderKey="provinceholder"
                      value={values.province}
                      onChangeText={handleChange('province')}
                      onBlur={handleBlur('province')}
                      errorText={
                        touched.province
                          ? (errors.province as string)
                          : undefined
                      }
                    />

                    <InputFactory
                      kind="base"
                      labelKey="districtsubtitle"
                      placeholderKey="districtholder"
                      value={values.district}
                      onChangeText={handleChange('district')}
                      onBlur={handleBlur('district')}
                      errorText={
                        touched.district
                          ? (errors.district as string)
                          : undefined
                      }
                    />

                    <InputFactory
                      kind="base"
                      labelKey="adresssubtitle"
                      placeholderKey="adressholder"
                      containerStyle={styles.adressContainer}
                      inputStyle={styles.adressInput}
                      multiline
                      numberOfLines={4}
                      textAlignVertical="top"
                      value={values.adress}
                      onChangeText={handleChange('adress')}
                      onBlur={handleBlur('adress')}
                      errorText={
                        touched.adress ? (errors.adress as string) : undefined
                      }
                    />
                  </View>
                </View>
                <View style={styles.TermskvkkOutContainer}>
                  <View style={styles.innerContainer}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        setFieldTouched('agreeKvkk', true, false);
                        setFieldValue('agreeKvkk', !checkedKvkk);
                      }}
                      style={[
                        styles.checkboxborder,
                        {
                          borderColor: showKvkkError
                            ? colors.danger
                            : checkedKvkk
                            ? colors.primary
                            : colors.grey200,
                        },
                      ]}
                    >
                      {checkedKvkk && (
                        <View style={styles.checkboxshadow}>
                          <View style={styles.checkboxinner} />
                        </View>
                      )}
                    </TouchableOpacity>
                    <Text style={[styles.fonts, styles.marginleft]}>
                      {t('membershipAgreement')}
                    </Text>
                  </View>
                  <View style={styles.innerContainer}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        setFieldTouched('agreeTerms', true, false);
                        setFieldValue('agreeTerms', !checkedTerms);
                      }}
                      style={[
                        styles.checkboxborder,
                        {
                          borderColor: showTermsError
                            ? colors.danger
                            : checkedTerms
                            ? colors.primary
                            : colors.grey200,
                        },
                      ]}
                    >
                      {checkedTerms && (
                        <View style={styles.checkboxshadow}>
                          <View style={styles.checkboxinner} />
                        </View>
                      )}
                    </TouchableOpacity>
                    <View style={styles.marginleft}>
                      <Text style={styles.fonts}>
                        <Text
                          style={{ color: colors.primary }}
                          onPress={() => {
                            /* optional: navigate to KVKK page */
                          }}
                        >
                          {t('kvkk')}
                        </Text>
                        <Text> {t('read')},</Text>
                      </Text>
                      <Text style={styles.fonts}>{t('accept')}</Text>
                    </View>
                  </View>
                </View>

                <ButtonFactory
                  kind="primary"
                  labelKey="Register"
                  onPress={handleSubmit as any}
                  disabled={!isValid || isSubmitting}
                />
              </>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </ScreenBackground>
  );
};

export default RegisterNext;
