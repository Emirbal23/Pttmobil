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
  OutContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: isTablet ? hp(5) : hp(6),
  },
  LogoLengContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: isTablet ? hp(7) : hp(5.5),
    flexDirection: 'row',
    width: isTablet ? wp(100) : wp(95),
  },
  LogoContainer: {
    alignItems: 'center',
    width: isTablet ? wp(75) : wp(60),
    position: 'absolute',
  },
  logoback: {
    alignItems: 'center',
    width: isTablet ? wp(75) : wp(60),
  },
  LanguageText: {
    color: colors.white,
    fontSize: isTablet ? s(16) : s(15),
    fontWeight: '400',
  },
  HorizantalArrow: {
    width: wp(100),
    height: isTablet ? hp(0.2) : hp(0.3),
    backgroundColor: colors.primary,
    marginTop: isTablet ? s(2) : s(2),
  },

  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: wp(100),
    borderTopLeftRadius: isTablet ? s(20) : s(16),
    borderTopRightRadius: isTablet ? s(20) : s(16),
    paddingHorizontal: isTablet ? s(24) : s(24),
    paddingTop: isTablet ? s(10) : s(8),
    paddingBottom: isTablet ? s(10) : s(55),
    backgroundColor: colors.white,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: isTablet ? s(14) : s(15),
  },
  languageOptionEnglish: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: isTablet ? s(14) : s(15),
  },
  divider: {
    height: isTablet ? hp(0.12) : hp(0.1),
    backgroundColor: colors.border,
  },

  radioOuter: {
    height: isTablet ? s(20) : s(20),
    width: isTablet ? s(20) : s(20),
    borderRadius: isTablet ? s(11) : s(10),
    borderWidth: s(2),
    borderColor: colors.grey800,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: isTablet ? s(14) : s(12),
  },
  radioInner: {
    height: isTablet ? s(12) : s(12),
    width: isTablet ? s(12) : s(12),
    borderRadius: isTablet ? s(15) : s(15),
    backgroundColor: colors.radioshadow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInnershadow: {
    backgroundColor: colors.primary,
    height: isTablet ? s(8) : s(8),
    width: isTablet ? s(8) : s(8),
    borderRadius: isTablet ? s(15) : s(15),
  },
  languageText: {
    fontSize: isTablet ? s(14) : s(13),
    color: colors.black,
    fontWeight: '500',
  },
  animatedview: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  titleText: {
    fontSize: isTablet ? s(18) : s(16),
    fontWeight: '600',
    color: colors.white,
  },
});

export default style;
