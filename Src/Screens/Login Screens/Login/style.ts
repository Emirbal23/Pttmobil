import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  BackGround: {
    backgroundColor: '#223F46',
    flex: 1,
  },
});

export default style;
