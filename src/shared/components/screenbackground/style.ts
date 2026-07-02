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
  BackGround: {
    backgroundColor: colors.grey900,
    flex: 1,
  },
});
