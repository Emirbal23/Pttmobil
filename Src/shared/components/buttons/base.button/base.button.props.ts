export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export interface BaseButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  testID?: string;
  accessibilityLabel?: string;
}
