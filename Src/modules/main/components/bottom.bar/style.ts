import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import colors from '@/shared/theme/color';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  BottomBarOutContainer: {
    marginTop: isTablet ? hp(2) : hp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomBarContainer: {
    width: isTablet ? wp(85) : wp(90),
    height: isTablet ? hp(9) : hp(6),
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: isTablet ? s(14) : s(10),
  },
  BottomBarOptionContainer: {
    width: isTablet ? s(120) : s(100),
    height: isTablet ? s(120) : s(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomBarOption: {
    width: isTablet ? s(100) : s(65),
    height: isTablet ? s(100) : s(65),
    backgroundColor: colors.primary,
    borderRadius: isTablet ? s(50) : s(40),
    borderWidth: isTablet ? s(3) : s(2),
    borderColor: colors.radioshadow,
    marginTop: isTablet ? s(20) : s(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomBarText: {
    fontSize: isTablet ? s(14) : s(10),
    color: colors.grey900,
    marginTop: isTablet ? s(7) : s(5),
  },
});

export default style;
