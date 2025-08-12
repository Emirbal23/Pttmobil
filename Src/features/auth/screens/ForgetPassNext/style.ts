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
  MassageContainer: {
    width: wp(100),
    height: isTablet ? hp(10) : hp(6),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  MassageText: {
    fontSize: isTablet ? s(12) : s(13),
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default style;
