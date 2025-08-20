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
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(100),
    height: isTablet ? hp(40) : hp(35),
  },
  BackGroundContainer: {
    width: wp(100),
    height: isTablet ? hp(35) : hp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  WelcomeText: {
    color: 'white',
    fontSize: isTablet ? s(14) : s(18),
    fontWeight: 'bold',
    marginBottom: isTablet ? s(40) : s(50),
  },
  WhiteContainer: {
    position: 'absolute',
    top: isTablet ? hp(26) : hp(25),
    backgroundColor: colors.white,
    height: isTablet ? hp(90) : hp(90),
    width: wp(100),
    borderTopLeftRadius: isTablet ? wp(5) : wp(7),
    borderTopRightRadius: isTablet ? wp(5) : wp(7),
  },
});
