import DeviceInfo from 'react-native-device-info';
import { Platform, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import colors from '@/shared/theme/color';

const isTablet = DeviceInfo.isTablet();

const style = StyleSheet.create({
  scrollcontainer: {
    height: hp(isTablet ? 70 : 70),
    paddingBottom: Platform.OS === 'ios' ? wp(isTablet ? 24 : 15) : 0,
    marginTop: hp(2),
  },
  multicodeinputcontainer: {
    flexDirection: 'row',
    width: wp(isTablet ? 60 : 80),
    alignSelf: 'center',
  },
  removeLine: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
  },
  removeText: {
    color: colors.danger,
    fontWeight: 'bold',
    fontSize: s(isTablet ? 24 : 20),
    lineHeight: s(isTablet ? 26 : 22),
  },
  linecontainer: {
    width: s(isTablet ? 32 : 25),
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: hp(5),
    marginRight: s(isTablet ? 8 : 4),
  },
  linecount: {
    color: colors.grey800,
    fontSize: s(isTablet ? 18 : 16),
  },
  addlinecontainer: {
    width: wp(isTablet ? 60 : 66),
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  addlinebutton: {
    backgroundColor: colors.primary,
    borderRadius: s(isTablet ? 10 : 6),
    paddingVertical: s(isTablet ? 14 : 8),
    alignItems: 'center',
    justifyContent: 'center',
    width: s(isTablet ? 140 : 110),
  },
  addlinebuttontext: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: s(isTablet ? 18 : 12),
  },
  ButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: 'center',
    marginBottom: wp(15),
  },

  radioOuter: {
    height: s(isTablet ? 24 : 20),
    width: s(isTablet ? 24 : 20),
    borderRadius: s(isTablet ? 13 : 10),
    borderWidth: s(2),
    borderColor: colors.grey800,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: s(isTablet ? 18 : 12),
  },
  radioInner: {
    height: s(isTablet ? 16 : 12),
    width: s(isTablet ? 16 : 12),
    borderRadius: s(isTablet ? 15 : 12),
    backgroundColor: colors.radioshadow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInnershadow: {
    backgroundColor: colors.primary,
    height: s(isTablet ? 10 : 8),
    width: s(isTablet ? 10 : 8),
    borderRadius: s(isTablet ? 15 : 8),
  },

  optionOutContainer: {
    marginTop: isTablet ? hp(4) : s(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: colors.grey100,
    width: wp(isTablet ? 60 : 90),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(isTablet ? 22 : 12),
  },
  optionContainer: {
    width: '100%',
    height: s(isTablet ? 80 : 60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(isTablet ? 6 : 5),
    alignItems: 'center',
  },
  optionText: {
    color: colors.grey900,
    fontSize: s(isTablet ? 20 : 15),
  },
  dashedView: {
    alignSelf: 'center',
    width: wp(isTablet ? 60 : 90),
    height: 1,
    borderTopWidth: s(2),
    borderStyle: 'dashed',
    borderColor: 'rgba(31,60,65,0.35)',
    opacity: 0.9,
  },
  padding: {
    paddingVertical: hp(isTablet ? 5 : 2),
  },
  buttonContainer: {
    height: hp(isTablet ? 40 : 25),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  history: {
    backgroundColor: colors.grey100,
    height: s(isTablet ? 80 : 65),
    width: wp(isTablet ? 80 : 90),
    marginTop: s(isTablet ? 35 : 25),
    borderRadius: s(isTablet ? 16 : 12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(isTablet ? 28 : 20),
  },
  modalbackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalcontainer: {
    backgroundColor: colors.white,
    borderRadius: s(isTablet ? 24 : 16),
    padding: s(isTablet ? 40 : 28),
    width: wp(isTablet ? 50 : 85),
    alignItems: 'center',
    elevation: 6,
  },
  modalsubtitle: {
    fontSize: s(isTablet ? 24 : 18),
    fontWeight: 'bold',
    marginBottom: s(isTablet ? 18 : 12),
    color: colors.danger,
  },
  modaldescription: {
    fontSize: s(isTablet ? 16 : 12),
    color: colors.grey800,
    textAlign: 'center',
    marginBottom: s(isTablet ? 32 : 24),
  },
  butonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonAgain: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: s(isTablet ? 18 : 12),
    borderRadius: s(isTablet ? 12 : 8),
    marginRight: s(isTablet ? 12 : 8),
    alignItems: 'center',
  },
  againtext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: s(isTablet ? 18 : 14),
  },
  buttonno: {
    flex: 1,
    backgroundColor: colors.grey200,
    paddingVertical: s(isTablet ? 18 : 12),
    borderRadius: s(isTablet ? 12 : 8),
    marginLeft: s(isTablet ? 12 : 8),
    alignItems: 'center',
  },
  buttonnoText: {
    color: colors.grey900,
    fontWeight: 'bold',
    fontSize: s(isTablet ? 18 : 14),
  },
});

export default style;
