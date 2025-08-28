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
    marginTop: s(isTablet ? 16 : 12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: wp(isTablet ? 80 : 90),
    height: hp(isTablet ? 7 : 8),
    borderRadius: s(isTablet ? 22 : 18),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey800,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(isTablet ? 18 : 15),
    width: '50%',
    height: '105%',
  },
  text: {
    fontWeight: '600',
    color: colors.grey800,
    fontSize: s(isTablet ? 14 : 12),
  },
});

export default style;
