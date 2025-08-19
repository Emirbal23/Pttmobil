import React from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import icons from '@/assets/icons';
import colors from '@/shared/theme/color';
import styles from './style'; 
const LANGUAGE_STORAGE_KEY = 'userLanguage';

interface LanguageSwitcherModalProps {
  visible: boolean;
  onClose: () => void;
}

const LanguageSwitcherModal: React.FC<LanguageSwitcherModalProps> = ({
  visible,
  onClose,
}) => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = React.useState<'tr' | 'en'>('tr');

  const backdropOpacity = useSharedValue(0);
  const sheetTranslateY = useSharedValue(0);

  React.useEffect(() => {
    if (visible) {
      backdropOpacity.value = 0;
      sheetTranslateY.value = 40;
      backdropOpacity.value = withTiming(1, {
        duration: 180,
        easing: Easing.out(Easing.quad),
      });
      sheetTranslateY.value = withTiming(0, {
        duration: 220,
        easing: Easing.out(Easing.cubic),
      });
    }
  }, [visible]);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        const lang: 'tr' | 'en' = saved === 'en' ? 'en' : 'tr';
        if (!mounted) return;
        setCurrentLang(lang);
        await i18n.changeLanguage(lang);
      } catch (e) {
        console.warn('Language load failed', e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [i18n]);

  const handleClose = React.useCallback(() => {
    backdropOpacity.value = withTiming(0, {
      duration: 160,
      easing: Easing.in(Easing.quad),
    });
    sheetTranslateY.value = withTiming(
      40,
      { duration: 200, easing: Easing.in(Easing.cubic) },
      (finished?: boolean) => {
        if (finished) {
          runOnJS(onClose)();
        }
      },
    );
  }, [onClose]);

  const changeLanguage = React.useCallback(
    async (target: 'tr' | 'en') => {
      try {
        setCurrentLang(target);
        await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, target);
        await i18n.changeLanguage(target);
        handleClose();
      } catch (e) {
        console.warn('Language change failed', e);
      }
    },
    [i18n, handleClose],
  );

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));
  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: sheetTranslateY.value }],
  }));

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <Animated.View style={[styles.animatedview, backdropStyle]}>
        <Pressable
          style={{ flex: 1 }}
          onPress={handleClose}
          accessibilityRole="button"
        />

        <Animated.View
          style={[styles.modalContainer, sheetStyle]}
          pointerEvents="auto"
        >
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={handleClose}
              style={{ width: wp(6), height: wp(6) }}
            >
              <icons.close width={wp(6)} height={wp(6)} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => changeLanguage('tr')}
            style={styles.languageOption}
            accessibilityRole="button"
            accessibilityLabel="Türkçe"
          >
            <View
              style={[
                styles.radioOuter,
                currentLang === 'tr' && { borderColor: colors.textTertiary },
              ]}
            >
              {currentLang === 'tr' && (
                <View style={styles.radioInner}>
                  <View style={styles.radioInnershadow} />
                </View>
              )}
            </View>
            <Text style={styles.languageText}>Türkçe</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            onPress={() => changeLanguage('en')}
            style={styles.languageOptionEnglish}
            accessibilityRole="button"
            accessibilityLabel="English"
          >
            <View
              style={[
                styles.radioOuter,
                currentLang === 'en' && { borderColor: colors.textTertiary },
              ]}
            >
              {currentLang === 'en' && (
                <View style={styles.radioInner}>
                  <View style={styles.radioInnershadow} />
                </View>
              )}
            </View>
            <Text style={styles.languageText}>English</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

export default LanguageSwitcherModal;
