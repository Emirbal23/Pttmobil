import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '@/app/navigation/types';
import { getEmailSchema } from '@/shared/utils/validator';

export const useForgotPasswordForm = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>(undefined);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardOpen(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardOpen(false));
    return () => { 
      showSub.remove(); 
      hideSub.remove(); 
    };
  }, []);

  const validate = () => {
    try {
      getEmailSchema().validateSync(email);
      setError(undefined);
      return true;
    } catch (err: any) {
      setError(err.message);
      return false;
    }
  };

  const onEndEditing = () => {
    validate();
  };

  return {
    t,
    navigation,
    email,
    setEmail,
    error,
    setError,
    isKeyboardOpen,
    validate,
    onEndEditing,
  };
};