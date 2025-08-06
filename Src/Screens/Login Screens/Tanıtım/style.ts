import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  TopContainer: {
    width: '100%',
    height: isTablet ? hp('13%') : hp('10%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CloseButtonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: isTablet ? wp('80%') : wp('80%'),
  },
  TopMassageContainer: {
    width: isTablet ? wp('80%') : wp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TopMassageText: {
    fontSize: isTablet ? moderateScale(22) : moderateScale(19),
    color: '#223F46',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ImageContainer: {
    height: isTablet ? hp('50%') : hp('55%'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: isTablet ? hp('45%') : hp('50%'),
    resizeMode: 'contain',
  },
  BottomContainer: {
    width: '100%',
    height: isTablet ? hp('24%') : hp('20%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  BottomPartContainer: {
    width: '100%',
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  YellowBar: {
    backgroundColor: '#FFC824',
    width: isTablet ? wp('40%') : wp('50%'),
    height: isTablet ? hp('0.7%') : hp('0.7%'),
    borderRadius: wp('100%'),
  },
  BottomText: {
    fontSize: isTablet ? moderateScale(17) : moderateScale(16),
    color: '#000000ff',
    textAlign: 'center',
  },
});

export default style;
