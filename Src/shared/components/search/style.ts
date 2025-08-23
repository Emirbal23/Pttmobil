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
  sheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // alta doğru yarı transparan bir panel
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomLeftRadius: s(14),
    borderBottomRightRadius: s(14),
    overflow: 'hidden',
  },
  inputWrap: {
    marginHorizontal: s(12),
    marginBottom: s(8),
    borderRadius: s(10),
    backgroundColor: '#F1F3F4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(12),
    height: s(isTablet ? 48 : 44),
  },
  input: {
    flex: 1,
    fontSize: s(isTablet ? 16 : 15),
    color: colors.grey900,
    paddingVertical: Platform.select({ ios: s(10), android: 0 }),
  },
  clearBtn: {
    marginLeft: s(8),
    width: s(26),
    height: s(26),
    borderRadius: s(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearTxt: { fontSize: s(22), color: '#5f6368', lineHeight: s(22) },
  item: {
    paddingHorizontal: s(16),
    paddingVertical: s(12),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E6E6E6',
  },
  // Sonuç satırı: sadece başlık gösterilir (route alt yazısı yok)
  itemTitle: {
    fontSize: s(isTablet ? 16 : 15),
    color: colors.grey900,
    fontWeight: Platform.select<'600' | '700'>({ ios: '600', android: '700' }),
  },
  itemRoute: {
    marginTop: s(3),
    fontSize: s(isTablet ? 12 : 11),
    color: '#65727B',
  },
  empty: { padding: s(16), alignItems: 'center' },
  emptyTxt: { color: '#65727B' },
  resultsPanel: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: s(14),
    borderTopRightRadius: s(14),
    borderBottomLeftRadius: s(14),
    borderBottomRightRadius: s(14),
  },
});

export default style;
