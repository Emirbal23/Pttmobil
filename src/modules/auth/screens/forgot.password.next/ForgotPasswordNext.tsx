import React from 'react';
import { Text, View, Alert } from 'react-native';
import styles from './style';
import { Subtitle, LoginBackground } from '../../components';
import { InputFactory } from '@/shared/components/inputs';
import { ButtonFactory } from '@/shared/components/buttons';
import { getPasswordSchema } from '@/shared/utils/validator';

import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useForgotPasswordForm } from './hooks';

const ForgotPasswordNext = () => {
  const {
    t,
    navigation,
    code,
    setCode,
    codeError,
    setCodeError,
    newPass,
    setNewPass,
    newPassError,
    setNewPassError,
    newpassconfirm,
    setnewpassconfirm,
    newpassconfirmError,
    setnewpassconfirmError,
    isKeyboardOpen,
  } = useForgotPasswordForm();

  return (
    <LoginBackground>
      <KeyboardAwareScrollView
        scrollEnabled={isKeyboardOpen}
        keyboardShouldPersistTaps="handled"
        bottomOffset={80}
        extraKeyboardSpace={250}
      >
        <Subtitle type="verificationSubtitle" />
        <View style={styles.MassageContainer}>
          <Text style={styles.MassageText}>{t('ui.forgotScreenMassage2')}</Text>
        </View>

        <InputFactory
          kind="base"
          labelKey="ui.activationCodeLabel"
          placeholderKey="ui.activationCodeHolder"
          value={code}
          keyboardType="number-pad"
          maxLength={6}
          onChangeText={(text: string) => {
            const numericText = text.replace(/[^0-9]/g, '');
            setCode(numericText);
            setCodeError(
              !numericText ? t('ui.activationCodeError') : undefined,
            );
          }}
          errorText={codeError}
          testID="reset-code"
        />

        <InputFactory
          kind="password"
          mode="newpass"
          value={newPass}
          onChangeText={(text: string) => {
            setNewPassError(undefined);
            setNewPass(text);
            setnewpassconfirmError(
              newpassconfirm && text !== newpassconfirm
                ? t('ui.passwordmismatch')
                : undefined,
            );
          }}
          errorText={newPassError}
          testID="reset-newpass"
        />

        <InputFactory
          kind="password"
          mode="newpass"
          labelKey="ui.newpassconfirmsubtitle"
          placeholderKey="ui.newpassconfirmholder"
          value={newpassconfirm}
          onChangeText={(text: string) => {
            setnewpassconfirm(text);
            setnewpassconfirmError(
              !text
                ? t('ui.passwordconfirmerror')
                : text !== newPass
                  ? t('ui.passwordmismatch')
                  : undefined,
            );
          }}
          errorText={newpassconfirmError}
          testID="reset-newpassconfirm"
        />

        <ButtonFactory
          kind="primary"
          labelKey="ui.resetpass"
          onPress={() => {
            if (!code) {
              setCodeError(t('ui.activationCodeError'));
            }

            let passError: string | undefined;
            try {
              getPasswordSchema().validateSync(newPass, { abortEarly: true });
              passError = undefined;
            } catch (e: unknown) {
              if (typeof e === 'object' && e !== null && 'errors' in e) {
                const maybeErrors = (e as { errors?: string[] }).errors;
                if (Array.isArray(maybeErrors)) {
                  passError = maybeErrors[0];
                } else if (e instanceof Error) {
                  passError = e.message;
                } else {
                  passError = t('ui.newpassrules');
                }
              } else if (e instanceof Error) {
                passError = e.message;
              } else {
                passError = t('ui.newpassrules');
              }
            }
            setNewPassError(passError);

            if (!newpassconfirm) {
              setnewpassconfirmError(t('ui.passwordconfirmerror'));
            } else if (newPass !== newpassconfirm) {
              setnewpassconfirmError(t('ui.passwordmismatch'));
            } else {
              setnewpassconfirmError(undefined);
            }

            if (
              !code ||
              passError ||
              !newpassconfirm ||
              newPass !== newpassconfirm
            ) {
              return;
            }

            Alert.alert(
              t('ui.successTitle'),
              t('ui.passwordResetSuccess'),
              [
                {
                  text: t('ui.ok'),
                  onPress: () => navigation.navigate('Login'),
                },
              ],
              { cancelable: false },
            );
          }}
          testID="reset-submit"
        />
      </KeyboardAwareScrollView>
    </LoginBackground>
  );
};

export default ForgotPasswordNext;
