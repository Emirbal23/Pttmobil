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
  ForumOutContainer: {
    width: '100%',
    height: isTablet ? hp(70) : hp(53),
    alignItems: 'center',
  },
  Forum: {
    backgroundColor: colors.grey100,
    width: isTablet ? wp(70) : wp(90),
    height: '100%',
    borderRadius: isTablet ? s(16) : s(10),
    paddingVertical: isTablet ? s(24) : s(24),
  },
  adressContainer: {
    height: isTablet ? hp(30) : hp(15),
  },
  adressInput: {
    width: isTablet ? wp(80) : wp(90),
    height: '100%',
  },
  TermskvkkOutContainer: {
    width: '100%',
    height: isTablet ? hp(12) : hp(10),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    width: isTablet ? wp(75) : wp(85),
    height: isTablet ? s(50) : s(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxborder: {
    width: isTablet ? s(30) : s(20),
    height: isTablet ? s(30) : s(20),
    borderWidth: isTablet ? 2.5 : 2,
    borderRadius: isTablet ? s(6) : s(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxshadow: {
    backgroundColor: colors.radioshadow,
    width: '85%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: isTablet ? s(6) : s(2),
  },
  checkboxinner: {
    backgroundColor: colors.primary,
    width: '65%',
    height: '65%',
    borderRadius: isTablet ? s(6) : s(2),
  },
  marginleft: {
    marginLeft: isTablet ? s(8) : s(5),
  },
  fonts: {
    fontSize: isTablet ? s(14) : s(12),
  },
});

export default style;
