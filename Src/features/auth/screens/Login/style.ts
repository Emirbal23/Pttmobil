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
  ForgotPassOutContainer: {
    width: wp(100),
    height: isTablet ? hp(6) : hp(3),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ForgetPassContainer: {
    width: isTablet ? wp(65) : wp(82),
    height: isTablet ? hp(5) : hp(3),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ForgetPassText: {
    color: colors.grey900,
    fontSize: isTablet ? s(10) : s(12),
  },
  BottomTextOutContainer: {
    height: isTablet ? hp(7) : hp(12),
    width: wp(100),
    justifyContent: 'flex-end',
  },
  BottomAllTextContainer: {
    height: isTablet ? hp(0) : hp(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContinueWithoutContainer: {
    height: isTablet ? hp(5) : hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContinueWithhoutText: {
    color: colors.primary,
    fontSize: isTablet ? s(12) : s(14),
    fontWeight: '600',
  },
  RegisterOutContainer: {
    height: isTablet ? hp(5) : hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  RegisterQuestText: {
    color: colors.grey200,
    fontSize: isTablet ? s(10) : s(13),
    fontWeight: '500',
  },
  RegisterContainer: {
    height: wp(100),
    width: isTablet ? wp(13) : wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegisterText: {
    color: colors.primary,
    fontSize: isTablet ? s(12) : s(13),
    fontWeight: '600',
  },
});

export default style;
