import type { RootStackParamList } from '@/app/navigation/types';
import  tr  from '@/shared/i18n/locales/tr.json'

export interface SecondaryButtonProps {
  email?: string;
  password?: string;
  onPress?: () => void;
  labelKey: keyof typeof tr;
  disabled?: boolean;
  testID?: string;
  targetScreen?: keyof RootStackParamList;
}
