//bu yapının kullanılmasını önermiyorum işlevsel olmadıkları için tasarımlara uygun olması adına birebir aynı olacak şekilde hiç bişeye dikkat etmeden geliştirdim güzel gözüküyor fakat işlevli, kullanılabilir bir yapı değil!
//kullanılacak olursa güncellenmesini tavsiye ederim.
import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  ViewStyle,
} from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo from 'react-native-device-info';
import icons from '@/assets/icons';
import colors from '@/shared/theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

type CardKind = 'Kargo' | 'Kargomat' | 'Filateli' | 'Telgraf';

type MainCardProps = {
  kind: CardKind;
  text?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  height?: number; // override if needed
};

const kindLabelKeyMap: Record<CardKind, string> = {
  Kargo: 'pages.Kargo.title',
  Kargomat: 'pages.Kargomat.title',
  Filateli: 'pages.FilatelikUrunler.title',
  Telgraf: 'pages.Telgraf.title',
};

const isTablet = DeviceInfo.isTablet();

const gradientMap: Record<CardKind, string[]> = {
  Kargo: [colors.secondary, '#FDF2D3'],
  Kargomat: [colors.grey200, '#DFEAEC'],
  Filateli: [colors.primary, '#CEF6FF'],
  Telgraf: ['#5863A0', '#D8DEFA'],
};

const circleColorMap: Record<CardKind, string> = {
  Kargo: colors.warning,
  Kargomat: '#2F855A',
  Filateli: '#44EEA2',
  Telgraf: colors.grey900,
};

type IconComp = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;
const typedIcons = icons as Partial<Record<string, IconComp>>;
const FallbackIcon: IconComp = () => null;

const iconMap: Record<CardKind, IconComp> = {
  Kargo: typedIcons.pttkargo ?? FallbackIcon,
  Kargomat: typedIcons.pttkargomat ?? typedIcons.pttkargo ?? FallbackIcon,
  Filateli: typedIcons.pttfilateli ?? typedIcons.pttkargo ?? FallbackIcon,
  Telgraf: typedIcons.ptttelgraf ?? typedIcons.pttkargo ?? FallbackIcon,
};

const GoBackIcon = typedIcons.goback ?? FallbackIcon;

const MainCard: React.FC<MainCardProps> = memo(
  ({ kind, onPress, containerStyle, height, text }) => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const CARD_WIDTH = wp(90);
    const CARD_HEIGHT = height ?? (isTablet ? hp(10.5) : hp(9.2)); // ~75-95 range responsive
    const RING_STROKE = isTablet ? 9 : 8;
    const dash = isTablet ? [s(3), s(8)] : [3, 4];
    const gradient = gradientMap[kind];
    const Icon = iconMap[kind];
    const displayText = text ?? t(kindLabelKeyMap[kind]);

    const handlePress = () => {
      if (onPress) {
        onPress();
        return;
      }
      switch (kind) {
        case 'Kargo':
          navigation.navigate('KargoTakip');
          break;
        case 'Kargomat':
          navigation.navigate('KargomatGonderileri');
          break;
        case 'Filateli':
          navigation.navigate('FilatelikUrunler');
          break;
        case 'Telgraf':
          navigation.navigate('TelgrafIslemleri');
          break;
        default:
          break;
      }
    };

    // Position rings so only elegant arcs appear on the left side
    const cx = -CARD_HEIGHT * -1.2; // move center slightly left off-canvas
    const cy = CARD_HEIGHT * 0.45;
    const r1 = CARD_HEIGHT * 1.1;
    const r2 = CARD_HEIGHT * 0.85;
    const r3 = CARD_HEIGHT * 0.55;

    return (
      <View style={[styles.root, containerStyle]}>
        <Pressable
          onPress={handlePress}
          android_ripple={{ color: '#00000010' }}
          style={({ pressed }) => [
            styles.card,
            {
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              opacity: pressed ? 0.96 : 1,
            },
          ]}
        >
          {/* Gradient background */}
          <LinearGradient
            colors={gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: isTablet ? 1 : 1.2, y: 0 }}
            style={StyleSheet.absoluteFillObject}
          />

          {/* Decorative dashed rings */}
          <View pointerEvents="none" style={StyleSheet.absoluteFill}>
            <Svg width={CARD_WIDTH} height={CARD_HEIGHT}>
              <Circle
                cx={cx}
                cy={cy}
                r={r1}
                stroke={circleColorMap[kind]}
                strokeWidth={RING_STROKE}
                fill="none"
                strokeDasharray={dash as number[]}
                strokeLinecap="butt"
                opacity={0.35}
              />
              <Circle
                cx={cx}
                cy={cy}
                r={r2}
                stroke={circleColorMap[kind]}
                strokeWidth={RING_STROKE}
                fill="none"
                strokeDasharray={dash as number[]}
                strokeLinecap="butt"
                opacity={0.35}
              />
              <Circle
                cx={cx}
                cy={cy}
                r={r3}
                stroke={circleColorMap[kind]}
                strokeWidth={RING_STROKE}
                fill="none"
                strokeDasharray={dash as number[]}
                strokeLinecap="butt"
                opacity={0.35}
              />
            </Svg>
          </View>

          {/* Content: left side icon + title */}
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: CARD_WIDTH * 0.47,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              paddingHorizontal: s(8),
            }}
          >
            <Icon
              width={s(isTablet ? 34 : 30)}
              height={s(isTablet ? 34 : 30)}
            />
            <Text
              style={{
                color:
                  kind === 'Filateli' || kind === 'Telgraf'
                    ? colors.white
                    : colors.grey900,
                fontWeight: Platform.select<'600' | '700'>({
                  ios: '600',
                  android: '700',
                }),
                fontSize: s(isTablet ? 13 : 12),
                marginTop: s(4),
              }}
              numberOfLines={1}
            >
              {displayText}
            </Text>
          </View>

          {/* Right triangle with slightly rounded tip */}
          <Svg
            style={{
              position: 'absolute',
              top: (CARD_HEIGHT - 45) / 2,
              left: CARD_WIDTH * 0.695,
              zIndex: 1,
            }}
            width={25}
            height={45}
            viewBox="0 0 25 45"
          >
            {/* Keep triangle shape and curve only at the tip */}
            <Path
              d="M25 0 L25 45 L4 25.9 Q0 22.5 4 19.1 L25 0 Z"
              fill={colors.grey900}
              opacity={0.15}
            />
          </Svg>

          {/* Right side rounded panel + back icon */}
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: CARD_WIDTH * 0.758,
              right: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: colors.grey900,
                opacity: 0.15,
                borderTopLeftRadius: s(20),
                borderBottomLeftRadius: s(20),
              }}
            />
            <GoBackIcon
              width={s(isTablet ? 42 : 40)}
              height={s(isTablet ? 42 : 40)}
            />
          </View>
        </Pressable>
      </View>
    );
  },
);

export default MainCard;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
    marginTop: s(13),
  },
  card: {
    borderRadius: s(12),
    overflow: 'hidden',
  },
});
