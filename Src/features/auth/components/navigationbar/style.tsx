import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  OutContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: hp(6),
  },
  LogoLengContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: isTablet ? hp(7.5) : hp(5.5),
    flexDirection: 'row',
  },
  LogoContainer: {
    alignItems: 'center',
    width: isTablet ? wp(70) : wp(75),
  },
  LanguageText: {
    color: 'white',
    fontSize: isTablet ? s(15) : s(20),
  },
  HorizantalArrow: {
    width: wp(100),
    height: hp(0.3),
    backgroundColor: '#3FB6D2',
  },
});

export default style;
