import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import colors from '@/shared/theme/color';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  SubtitleText: {
    fontSize: isTablet ? s(15) : s(15),
    color: colors.grey900,
    textAlign: 'center',
    fontWeight: '600',
  },
  Container: {
    height: isTablet ? wp(8) : wp(18),
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
