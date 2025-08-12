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
  WelcomeText: {
    color: colors.secondary,
    fontSize: isTablet ? s(14) : s(18),
    fontWeight: 'bold',
    marginBottom: isTablet ? s(40) : s(50),
  },
  MassageContainer: {
    width: wp(100),
    height: isTablet ? hp(10) : hp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  MassageText: {
    fontSize: isTablet ? s(12) : s(13),
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default style;
