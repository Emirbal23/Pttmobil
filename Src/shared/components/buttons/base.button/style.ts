import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import colors from '@/shared/theme/color';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  container: {
    marginTop: isTablet ? hp(2) : hp(3),
    alignItems: 'center',
  },
  Button: {
    width: isTablet ? wp(70) : wp(85),
    height: isTablet ? hp(7) : hp(6),
    backgroundColor: colors.textTertiary,
    borderRadius: isTablet ? s(10) : s(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: colors.secondary,
    fontSize: isTablet ? s(12) : s(15),
  },
  ErrorText: {},
});

export default style;
