import React from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import styles from './style';
import { Subtitle, LoginBackground } from '../../components';
import { InputFactory } from '@/shared/components/inputs';
import { ButtonFactory } from '@/shared/components/buttons';
import { isValidEmail } from '@/shared/utils/validator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useForgotPasswordForm } from './hooks';

const ForgotPassword = () => {
  const { t, navigation, email, setEmail, error, setError, isKeyboardOpen } =
    useForgotPasswordForm();
  return (
    <LoginBackground>
      <KeyboardAwareScrollView
        scrollEnabled={isKeyboardOpen}
        keyboardShouldPersistTaps="handled"
        bottomOffset={80}
        extraKeyboardSpace={150}
      >
        <Subtitle type="forgot" />
        <View style={styles.MassageContainer}>
          <Text style={styles.MassageText}>{t('ui.forgotScreenMassage')}</Text>
        </View>
        <InputFactory
          kind="email"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setError(
              !text
                ? t('ui.emailerror')
                : !isValidEmail(text)
                  ? t('ui.emailerrormassage')
                  : undefined,
            );
          }}
          errorText={error}
          testID="forgot-email"
        />

        <ButtonFactory
          kind="primary"
          labelKey="ui.resetpass"
          onPress={() => {
            if (!email || !isValidEmail(email)) {
              setError(!email ? t('ui.emailerror') : t('ui.emailerrormassage'));
              return;
            }
            setError(undefined);

            Alert.alert(
              t('ui.successTitle'),
              t('ui.resetLinkSent'),
              [
                {
                  text: t('ui.ok'),
                  onPress: () => navigation.navigate('ForgotPasswordNext'),
                },
              ],
              { cancelable: false },
            );
          }}
          testID="forget-submit"
        />
        <View style={styles.backtologinContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.backtologinText}>{t('ui.backtologin')}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </LoginBackground>
  );
};

export default ForgotPassword;
