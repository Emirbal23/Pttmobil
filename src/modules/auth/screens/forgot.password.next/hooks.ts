import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '@/app/navigation/types';

export const useForgotPasswordForm = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState<string | undefined>();
  const [newPass, setNewPass] = useState('');
  const [newPassError, setNewPassError] = useState<string | undefined>();
  const [newpassconfirm, setnewpassconfirm] = useState('');
  const [newpassconfirmError, setnewpassconfirmError] = useState<string | undefined>();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardOpen(true),
    );
    const hideSub = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardOpen(false),
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return {
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
  };
};