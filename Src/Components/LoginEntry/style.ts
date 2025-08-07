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
    height: isTablet ? hp('14%') : hp('10%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapper: {
    width: isTablet ? wp('70%') : wp('85%'),
    height: isTablet ? '85%' : '90%',
  },
  labelContainer: {
    height: isTablet ? hp('4.5%') : hp('4%'),
    justifyContent: 'flex-end',
    paddingBottom: isTablet ? s(5) : s(10),
  },
  label: {
    color: '#223F46',
    fontSize: isTablet ? s(12) : s(15),
  },
  inputRow: {
    width: '100%',
    height: isTablet ? hp('7%') : hp('5.5%'),
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
    fontSize: isTablet ? s(12) : s(15),
  },
  toggleContainer: {
    width: '14%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default style;
