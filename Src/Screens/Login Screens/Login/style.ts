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
    height: isTablet ? hp('42%') : hp('35%'),
    position: 'relative',
  },
  BackGroundContainer: {
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
  WhiteContainer: {
    position: 'absolute',
    top: isTablet ? hp('32%') : hp('25%'),
    backgroundColor: 'white',
    height: isTablet ? hp('65%') : hp('65%'),
    width: '100%',
    borderTopLeftRadius: isTablet ? wp('5%') : wp('7%'),
    borderTopRightRadius: isTablet ? wp('5%') : wp('7%'),
  },
});

export default style;
