import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    height: isTablet ? hp('42%') : hp('35%'),
  },
  BackGround: {
    width: wp('100%'),
    height: isTablet ? hp('35%') : hp('28%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  WelcomeText: {
    color: 'white',
    fontSize: isTablet ? wp('7%') : wp('5%'),
    fontWeight: 'bold',
    marginBottom: isTablet ? s(70) : s(50),
  },
});

export default style;
