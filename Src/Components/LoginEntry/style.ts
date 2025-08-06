import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapper: {
    width: isTablet ? wp('80%') : wp('85%'),
    height: isTablet ? '75%' : '90%',
  },
  labelContainer: {
    height: '40%',
    justifyContent: 'flex-end',
    paddingBottom: s(10),
  },
  label: {
    color: '#223F46',
    fontSize: isTablet ? s(18) : s(15),
  },
  inputRow: {
    width: '100%',
    height: isTablet ? hp('10%') : hp('5.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: isTablet ? s(2) : s(1.5),
    borderColor: '#A1ADAF',
    borderRadius: isTablet ? s(9) : s(7),
  },
  iconContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: isTablet ? s(8) : s(4),
  },
  input: {
    width: '76%',
    height: isTablet ? hp('6%') : hp('5.5%'),
    paddingHorizontal: isTablet ? s(8) : s(5),
    fontSize: isTablet ? s(18) : s(15),
  },
  toggleContainer: {
    width: '14%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
