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
    width: wp(100),
    height: isTablet ? hp(14) : hp(12),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapper: {
    width: isTablet ? wp(70) : wp(85),
    height: isTablet ? hp(12) : hp(10),
  },
  labelContainer: {
    height: isTablet ? hp(4.5) : hp(4),
    justifyContent: 'flex-end',
    paddingBottom: isTablet ? s(5) : s(10),
  },
  label: {
    color: colors.background,
    fontSize: isTablet ? s(12) : s(15),
  },
  inputRow: {
    width: isTablet ? wp(70) : wp(85),
    height: isTablet ? hp(7) : hp(5.5),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: isTablet ? s(2) : s(1.5),
    borderColor: colors.textQuaternary,
    borderRadius: isTablet ? s(8) : s(7),
  },
  iconContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: isTablet ? s(8) : s(4),
  },
  input: {
    width: isTablet ? wp(52) : wp(65),
    height: isTablet ? hp('6%') : hp(5.5),
    paddingHorizontal: isTablet ? s(8) : s(5),
    fontSize: isTablet ? s(12) : s(15),
  },
  toggleContainer: {
    width: isTablet ? wp(5) : wp(11),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  helperText: {
    marginTop: isTablet ? s(4) : s(6),
    fontSize: isTablet ? s(20) : s(12),
    opacity: 0.7,
  },
  errorText: {
    marginTop: isTablet ? s(0.5) : s(3),
    fontSize: isTablet ? s(8) : s(10),
    color: colors.error,
  },
});

export default style;
