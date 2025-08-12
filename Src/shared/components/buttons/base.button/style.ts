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
    width: '100%',
    height: isTablet ? hp(11) : hp(10),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Button: {
    width: isTablet ? wp(65) : wp(80),
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
});

export default style;
