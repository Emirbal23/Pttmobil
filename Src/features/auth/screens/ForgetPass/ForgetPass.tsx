import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import images from '@/assets/images';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { NavigationBar, Subtitle, ScreenBackground } from '../../components';
import { InputFactory } from '@/shared/components/inputs';
import { ButtonFactory } from '@/shared/components/buttons';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '@/app/navigation/types';
import { isValidEmail } from '@/shared/utils/validator';

const ForgetPass = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>(undefined);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ScreenBackground>
      <Subtitle type="forget" />
      <View style={styles.MassageContainer}>
        <Text style={styles.MassageText}>{t('ForgetScreenMassage')}</Text>
      </View>
      <InputFactory
        kind="email"
        placeholderKey="emailholder"
        value={email}
        onChangeText={text => {
          setEmail(text);
          setError(
            !text
              ? t('emailerror')
              : !isValidEmail(text)
              ? t('emailerrormassage')
              : undefined,
          );
        }}
        errorText={error}
        testID="forget-email"
      />

      <ButtonFactory
        kind="secondary"
        labelKey="resetpass"
        onPress={() => {
          if (!email || !isValidEmail(email)) {
            setError(!email ? t('emailerror') : t('emailerrormassage'));
            return;
          }
          setError(undefined);

          Alert.alert(
            t('successTitle'),
            t('resetLinkSent'),
            [
              {
                text: t('ok'),
                onPress: () => navigation.navigate('ForgetpassNext'),
              },
            ],
            { cancelable: false },
          );
        }}
        testID="forget-submit"
      />
    </ScreenBackground>
  );
};

export default ForgetPass;
