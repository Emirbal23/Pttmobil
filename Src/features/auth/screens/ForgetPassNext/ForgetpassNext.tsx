import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { Subtitle, ScreenBackground } from '../../components';
import { InputFactory } from '@/shared/components/inputs';
import { ButtonFactory } from '@/shared/components/buttons';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '@/app/navigation/types';
import { isStrongPassword } from '@/shared/utils/validator';

const ForgetPass = () => {
  const { t } = useTranslation();
  // State declarations grouped for readability
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState<string | undefined>(undefined);
  const [newPass, setNewPass] = useState('');
  const [newPassError, setNewPassError] = useState<string | undefined>(
    undefined,
  );
  const [newPassTry, setNewPassTry] = useState('');
  const [newPassTryError, setNewPassTryError] = useState<string | undefined>(
    undefined,
  );
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ScreenBackground>
      <Subtitle type="verificationSubtitle" />
      <View style={styles.MassageContainer}>
        <Text style={styles.MassageText}>{t('ForgetScreenMassage2')}</Text>
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
        labelKey="newpasssubtitle"
        placeholderKey="newpassholder"
        value={newPass}
        onChangeText={(text: string) => {
          setNewPassError(undefined);
          setNewPass(text);
          setNewPassTryError(
            newPassTry && text !== newPassTry
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
        value={newPassTry}
        onChangeText={(text: string) => {
          setNewPassTry(text);
          setNewPassTryError(
            !text
              ? t('passwordconfirmerror')
              : text !== newPass
              ? t('passwordmismatch')
              : undefined,
          );
        }}
        errorText={newPassTryError}
        testID="reset-newpasstry"
      />

      <ButtonFactory
        kind="secondary"
        labelKey="resetpass"
        onPress={() => {
          if (!code) {
            setCodeError(t('activationCodeError'));
          }

          const passError = isStrongPassword(newPass);
          setNewPassError(passError);

          if (!newPassTry) {
            setNewPassTryError(t('passwordconfirmerror'));
          } else if (newPass !== newPassTry) {
            setNewPassTryError(t('passwordmismatch'));
          } else {
            setNewPassTryError(undefined);
          }

          if (!code || passError || !newPassTry || newPass !== newPassTry) {
            return;
          }

          // Success
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
    </ScreenBackground>
  );
};

export default ForgetPass;
