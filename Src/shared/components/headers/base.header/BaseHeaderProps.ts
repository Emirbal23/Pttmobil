export interface BaseHeaderProps {
  leftIcon?: React.ReactNode;
  onPressLeft?: () => void;

  rightIcon?: React.ReactNode;
  onPressRight?: () => void;

  showLanguageSwitch?: boolean;
  languageLabel?: string;

  titleType?: 'text' | 'logo'; 
  title?: string;
  titleLogo?: React.ReactNode;

  showBottomDivider?: boolean; 

  testIDLeft?: string;
  testIDRight?: string;
  testIDLanguage?: string;
}