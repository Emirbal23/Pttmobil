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
    height: isTablet ? hp(70) : hp(64),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Forum: {
    backgroundColor: colors.grey100,
    width: isTablet ? wp(70) : wp(90),
    height: '100%',
    borderRadius: isTablet ? s(16) : s(10),
    padding: isTablet ? s(24) : s(20),
  },
});

export default style;
