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
          <Text style={styles.MassageText}>{t('forgotScreenMassage2')}</Text>
        </View>

        <InputFactory
          kind="base"
          labelKey="activationCodeLabel"
          placeholderKey="activationCodeHolder"
          value={code}
          keyboardType="number-pad"
          maxLength={6}
          onChangeText={(text: string) => {
            const numericText = text.replace(/[^0-9]/g, '');
            setCode(numericText);
            setCodeError(!numericText ? t('activationCodeError') : undefined);
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
                ? t('passwordmismatch')
                : undefined,
            );
          }}
          errorText={newPassError}
          testID="reset-newpass"
        />

        <InputFactory
          kind="password"
          mode="newpass"
          labelKey="newpassconfirmsubtitle"
          placeholderKey="newpassconfirmholder"
          value={newpassconfirm}
          onChangeText={(text: string) => {
            setnewpassconfirm(text);
            setnewpassconfirmError(
              !text
                ? t('passwordconfirmerror')
                : text !== newPass
                ? t('passwordmismatch')
                : undefined,
            );
          }}
          errorText={newpassconfirmError}
          testID="reset-newpassconfirm"
        />

        <ButtonFactory
          kind="primary"
          labelKey="resetpass"
          onPress={() => {
            if (!code) {
              setCodeError(t('activationCodeError'));
            }

            let passError: string | undefined;
            try {
              getPasswordSchema().validateSync(newPass, { abortEarly: true });
              passError = undefined;
            } catch (e: any) {
              passError = e?.errors?.[0] ?? e?.message ?? t('newpassrules');
            }
            setNewPassError(passError);

            if (!newpassconfirm) {
              setnewpassconfirmError(t('passwordconfirmerror'));
            } else if (newPass !== newpassconfirm) {
              setnewpassconfirmError(t('passwordmismatch'));
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
              t('successTitle'),
              t('passwordResetSuccess'),
              [
                {
                  text: t('ok'),
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
