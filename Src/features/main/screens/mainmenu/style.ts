import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import colors from '@/shared/theme/color';
import { SearchBar } from 'react-native-screens';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: isTablet ? hp(28) : hp(20),
    justifyContent: 'flex-end',
  },
  stepperOutContainer: {
    width: '100%',
    height: isTablet ? s(56) : s(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepperContainer: {
    width: isTablet ? s(90) : s(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepper: {
    width: isTablet ? s(14) : s(10),
    height: isTablet ? s(14) : s(10),
    borderRadius: isTablet ? s(4) : s(2),
  },
  searchbarContainer: {
    height: isTablet ? hp(10) : hp(7.5),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  searchbar: {
    width: isTablet ? wp(80) : wp(90),
    height: isTablet ? hp(7) : hp(6),
    borderWidth: isTablet ? s(2) : s(1.5),
    borderRadius: isTablet ? s(12) : s(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: isTablet ? wp(5) : wp(3),
    borderColor: colors.grey200,
  },
  barkodContainer: {
    width: isTablet ? wp(10) : wp(8),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbarText: {
    fontSize: isTablet ? s(17) : s(15),
    opacity: 0.5,
    color: colors.grey200,
  },
  BottomBarOutContainer: {
    width: '100%',
    height: isTablet ? hp(15) : hp(10),
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
    borderColor: '#82DEF3',
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
