import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Platform,
  StatusBar,
  Modal,
} from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { s } from 'react-native-size-matters';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import icons from '@/assets/icons'; // Adjust the import path as needed
import { drawerStyles } from './styles'; // Adjust the import path as needed
import { useDrawerAnimation } from './DrawerAnimation';
import type { DrawerProps } from './DrawerProps';

const Drawer: React.FC<DrawerProps> = ({
  visible,
  side = 'left',
  onClose,
  title,
  children,
}) => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      if (visible) {
        onClose?.();
      }
    });
    return unsubscribe;
  }, [navigation, visible, onClose]);
  const insets = useSafeAreaInsets();
  const { panelWidth, translateX, backdrop } = useDrawerAnimation(
    visible,
    side,
  );

  const panelStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdrop.value * 0.6,
  }));

  const sideRadii =
    side === 'left'
      ? { borderTopRightRadius: s(22), borderBottomRightRadius: s(22) }
      : { borderTopLeftRadius: s(22), borderBottomLeftRadius: s(22) };

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      presentationStyle="overFullScreen"
      animationType="none"
      onRequestClose={onClose}
    >
      <View
        pointerEvents={'auto'}
        style={[StyleSheet.absoluteFill, drawerStyles.host]}
      >
        {/* Backdrop */}
        <Pressable
          onPress={onClose}
          style={[StyleSheet.absoluteFill, drawerStyles.backdropHost]}
        >
          <Animated.View style={[drawerStyles.backdrop, backdropStyle]} />
        </Pressable>

        {/* Panel */}
        <Animated.View
          style={[
            drawerStyles.panelBase,
            side === 'left' ? { left: 0 } : { right: 0 },
            { width: panelWidth },
            sideRadii,
            {
              top:
                Platform.OS === 'android'
                  ? (StatusBar.currentHeight ?? 0) 
                  : 0,
              bottom: 0,
            },
            // safe-area paddings inside the panel
            {
              paddingTop: Math.max(insets.top, s(10)) + hp(1.2),
              paddingBottom: Math.max(insets.bottom, s(8)) + hp(1),
            },
            panelStyle,
          ]}
        >
          {/* Close button (positioned by side & safe-area) */}
          <TouchableOpacity
            onPress={onClose}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel="Kapat"
            style={[
              drawerStyles.closeBtn,
              side === 'left' ? { right: s(24) } : { left: s(24) },
              {
                top: Math.max(insets.top, s(6)),
              },
            ]}
          >
            <icons.close width={s(20)} height={s(20)} />
          </TouchableOpacity>

          {/* Top-right/left home icon (always shown, opposite corner of X) */}
          {side === 'right' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('MainMenu')}
              style={[
                drawerStyles.homeRightBtn,
                { top: Math.max(insets.top, s(6)), right: s(14) },
              ]}
              activeOpacity={0.7}
            >
              <icons.pttanasayfablack width={s(22)} height={s(22)} />
            </TouchableOpacity>
          ) : null}

          {title ? <Text style={drawerStyles.title}>{title}</Text> : null}

          <View style={drawerStyles.content}>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Drawer;
