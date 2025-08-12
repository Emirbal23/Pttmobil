import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import colors from '@/shared/theme/color';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  TopContainer: {
    width: wp(100),
    height: isTablet ? hp(13) : hp(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CloseButtonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: wp(80),
  },
  TopMassageContainer: {
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TopMassageText: {
    fontSize: isTablet ? moderateScale(22) : moderateScale(19),
    color: colors.background,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ImageContainer: {
    height: isTablet ? hp(55) : hp(55),
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: isTablet ? hp(45) : hp(52),
    resizeMode: 'contain',
  },
  BottomContainer: {
    width: wp(100),
    height: isTablet ? hp(24) : hp(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  BottomPartContainer: {
    width: wp(100),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  YellowBar: {
    backgroundColor: colors.primary,
    width: isTablet ? wp(40) : wp(50),
    height: hp(0.5),
    borderRadius: wp(100),
  },
  BottomText: {
    fontSize: isTablet ? moderateScale(15) : moderateScale(16),
    color: colors.textPrimary,
    textAlign: 'center',
  },
});

export default style;
