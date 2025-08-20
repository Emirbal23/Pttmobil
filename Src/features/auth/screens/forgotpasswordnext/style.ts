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
    height: isTablet ? hp(6.5) : hp(7),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  MassageText: {
    fontSize: isTablet ? s(10) : s(12),
    color: colors.grey800,
    textAlign: 'center',
  },
});

export default style;
