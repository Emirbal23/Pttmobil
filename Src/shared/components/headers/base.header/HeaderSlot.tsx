import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface HeaderSlotProps {
  icon?: React.ReactNode;
  onPress?: () => void;
  width?: number;
  align?: 'center' | 'flex-start' | 'flex-end';
  testID?: string;
  accessibilityLabel?: string;
}

const HeaderSlot: React.FC<HeaderSlotProps> = ({
  icon,
  onPress,
  width = wp(10),
  align = 'center',
  testID,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      style={[styles.slot, { width, alignItems: align }]}
      onPress={onPress}
      disabled={!icon}
      testID={testID}
      accessibilityRole={icon ? 'button' : undefined}
      accessibilityLabel={accessibilityLabel}
    >
      {icon ?? <View style={styles.placeholder} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  slot: {
    justifyContent: 'center',
  },
  placeholder: {
    width: wp(7),
    height: wp(8),
  },
});

export default HeaderSlot;
