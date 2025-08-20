import DeviceInfo from 'react-native-device-info';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import colors from '@/shared/theme/color';

const isTablet = DeviceInfo.isTablet();

export const contentStyles = StyleSheet.create({
  scroll: {
    paddingBottom: hp(4),
  },
  headerWrap: {
    alignItems: 'center',
    paddingTop: hp(3.2),
    paddingBottom: hp(2),
  },
  avatarOuter: {
    width: s(108),
    height: s(108),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarDashed: {
    position: 'absolute',
    width: s(100),
    height: s(100),
    borderRadius: s(50),
    borderWidth: 2,
    borderColor: colors.grey200,
    borderStyle: 'dashed',
  },
  avatarHolder: {
    width: s(84),
    height: s(84),
    borderRadius: s(42),
    overflow: 'hidden',
    backgroundColor: colors.grey200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: s(42),
  },
  editBadge: {
    position: 'absolute',
    bottom: s(2),
    right: s(2),
    zIndex: 6,
    elevation: 6,
    width: s(28),
    height: s(28),
    borderRadius: s(14),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  honorific: {
    marginTop: s(10),
    color: '#0B9BB6',
    fontSize: s(14),
    fontWeight: '600',
  },
  fullName: {
    marginTop: s(4),
    color: '#143C49',
    fontSize: s(16),
    fontWeight: '700',
  },
  menuRow: {
    height: s(50),
    borderRadius: s(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(14),
    overflow: 'hidden',
  },
  menuRowDisabled: {
    backgroundColor: '#B9C5CA',
  },
  menuRowActive: {
    opacity: 0.9,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  menuLabel: {
    color: 'white',
    fontSize: s(14),
    fontWeight: '600',
  },
  menuLabelDisabled: {
    color: '#E9EEF0',
  },
  chev: {
    color: 'white',
    fontSize: s(22),
    marginRight: s(2),
  },
  chevDisabled: {
    color: '#F2F4F5',
  },
  chevIconWrap: {
    minWidth: s(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackIcon: {
    color: 'white',
    fontSize: s(12),
  },
  footer: {
    alignItems: 'center',
    marginTop: hp(3),
    marginBottom: hp(2),
  },
  followText: {
    color: '#1A2B33',
    fontSize: s(13),
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: s(10),
  },
  socialRow: {
    flexDirection: 'row',
    gap: s(12),
  },
  socialIcon: {
    fontSize: s(22),
    color: '#179FB8',
  },
  subList: {
    width: '85%',
    alignSelf: 'center',
    backgroundColor: '#E1F4F9',
    paddingVertical: s(6),
    gap: s(4),
    borderBottomLeftRadius: s(10),
    borderBottomRightRadius: s(10),
  },
  subRow: {
    paddingVertical: s(10),
    paddingHorizontal: s(12),
    borderBottomWidth: 1,
    borderBottomColor: '#CBE6ED',
  },
  subLabel: {
    fontSize: s(13),
    color: '#13414D',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export const drawerStyles = StyleSheet.create({
  host: {
    zIndex: 9999,
    elevation: 9999,
  },
  backdropHost: {
    zIndex: 1,
    elevation: 1,
  },
  backdrop: {
    flex: 1,
    backgroundColor: '#000',
  },
  panelBase: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: '#F4FBFE',
    paddingHorizontal: s(16),
    zIndex: 2,
    elevation: 2,
  },
  closeBtn: {
    position: 'absolute',
    padding: s(6),
    alignItems: 'center',
    justifyContent: 'center',
    width: s(35),
    height: s(35),
    zIndex: 50,
    elevation: 50,
  },
  homeRightBtn: {
    position: 'absolute',
    padding: s(6),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
  title: {
    fontSize: isTablet ? s(18) : s(16),
    fontWeight: '600',
    color: '#0F2D3A',
    marginBottom: s(12),
  },
  content: {
    flex: 1,
  },
});
