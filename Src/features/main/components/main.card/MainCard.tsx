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

type CardKind = 'Kargo' | 'Kargomat' | 'Filateli' | 'Telgraf';

type MainCardProps = {
  kind: CardKind;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  height?: number; // override if needed
};

const isTablet = DeviceInfo.isTablet();

const gradientMap: Record<CardKind, string[]> = {
  Kargo: ['#FFC824', '#FDF2D3'],
  Kargomat: [colors.grey200, '#DFEAEC'],
  Filateli: ['#3FB6D2', '#CEF6FF'],
  Telgraf: ['#5863A0', '#D8DEFA'],
};

const circleColorMap: Record<CardKind, string> = {
  Kargo: '#FF7518',
  Kargomat: '#2F855A',
  Filateli: '#44EEA2',
  Telgraf: '#223F46',
};

// Safe icon resolution with fallback to pttkargo
const iconMap: Record<
  CardKind,
  React.ComponentType<{ width?: number; height?: number; color?: string }>
> = {
  Kargo: (icons as any).pttkargo ?? (icons as any).goback,
  Kargomat:
    (icons as any).pttkargomat ??
    (icons as any).pttkargo ??
    (icons as any).goback,
  Filateli:
    (icons as any).pttfilateli ??
    (icons as any).pttkargo ??
    (icons as any).goback,
  Telgraf:
    (icons as any).ptttelgraf ??
    (icons as any).pttkargo ??
    (icons as any).goback,
};

const MainCard: React.FC<MainCardProps> = memo(
  ({ kind, onPress, containerStyle, height }) => {
    const CARD_WIDTH = wp(90);
    const CARD_HEIGHT = height ?? (isTablet ? hp(10.5) : hp(9.2)); // ~75-95 range responsive
    const RING_STROKE = isTablet ? 9 : 8;
    const dash = isTablet ? [s(3), s(8)] : [3, 4];
    const gradient = gradientMap[kind];
    const Icon = iconMap[kind];

    // Position rings so only elegant arcs appear on the left side
    const cx = -CARD_HEIGHT * -1.2; // move center slightly left off-canvas
    const cy = CARD_HEIGHT * 0.45;
    const r1 = CARD_HEIGHT * 1.1;
    const r2 = CARD_HEIGHT * 0.85;
    const r3 = CARD_HEIGHT * 0.55;

    return (
      <View style={[styles.root, containerStyle]}>
        <Pressable
          onPress={onPress}
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
                strokeDasharray={dash as any}
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
                strokeDasharray={dash as any}
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
                strokeDasharray={dash as any}
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
                    ? '#FFFFFF'
                    : colors.grey900,
                fontWeight: Platform.select({
                  ios: '600',
                  android: '700',
                }) as any,
                fontSize: s(isTablet ? 13 : 12),
                marginTop: s(4),
              }}
              numberOfLines={1}
            >
              {kind === 'Filateli' ? 'Filatelik Ürünler' : kind}
            </Text>
          </View>

          {/* Right triangle with slightly rounded tip */}
          <Svg
            style={{
              position: 'absolute',
              top: (CARD_HEIGHT - 45) / 2,
              left: CARD_WIDTH * 0.69, // approx where your 250px was for 90% width
              zIndex: 1,
            }}
            width={25}
            height={45}
            viewBox="0 0 25 45"
          >
            {/* Keep triangle shape and curve only at the tip */}
            <Path
              d="M25 0 L25 45 L4 25.9 Q0 22.5 4 19.1 L25 0 Z"
              fill="#223F46"
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
                backgroundColor: '#223F46',
                opacity: 0.15,
                borderTopLeftRadius: s(20),
                borderBottomLeftRadius: s(20),
              }}
            />
            <icons.goback
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
