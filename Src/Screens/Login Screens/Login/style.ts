import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  BackGround: {
    backgroundColor: '#223F46',
    flex: 1,
  },
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    height: isTablet ? hp('40%') : hp('35%'),
  },
  BackGroundContainer: {
    width: wp('100%'),
    height: isTablet ? hp('35%') : hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  WelcomeText: {
    color: 'white',
    fontSize: isTablet ? s(14) : wp('5%'),
    fontWeight: 'bold',
    marginBottom: isTablet ? s(40) : s(50),
  },
  WhiteContainer: {
    position: 'absolute',
    top: isTablet ? hp('28%') : hp('25%'),
    backgroundColor: 'white',
    height: isTablet ? hp('80%') : hp('80%'),
    width: '100%',
    borderTopLeftRadius: isTablet ? wp('5%') : wp('7%'),
    borderTopRightRadius: isTablet ? wp('5%') : wp('7%'),
  },
});

export default style;
