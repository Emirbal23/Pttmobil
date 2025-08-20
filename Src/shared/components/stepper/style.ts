import { StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import colors from '@/shared/theme/color';

const isTablet = DeviceInfo.isTablet();

export default StyleSheet.create({
  OutContainer: {
    width: '100%',
    height: isTablet ? hp(12) : hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container: {
    width: isTablet ? wp(85) : wp(90),
    height: isTablet ? hp(35) : hp(5.5),
    backgroundColor: colors.secondary,
    paddingHorizontal: isTablet ? s(12) : s(12),
    borderRadius: s(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  StepperContainer: {
    width: isTablet ? s(60) : s(55),
    height: isTablet ? s(60) : s(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontWeight: '500',
    color: colors.primary,
    fontSize: isTablet ? s(18) : s(18),
  },
});
