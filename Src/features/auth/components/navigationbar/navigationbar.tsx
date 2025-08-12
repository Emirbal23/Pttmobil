import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import React from 'react';
import icons from '@/assets/icons';
import styles from './style';
import colors from '@/shared/theme/color';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const LANGUAGE_STORAGE_KEY = 'userLanguage';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = React.useState<'tr' | 'en'>('tr');
  const [isLangModalMounted, setLangModalMounted] = React.useState(false);

  // Reanimated shared values for backdrop opacity and sheet translateY
  const backdropOpacity = useSharedValue(0);
  const sheetTranslateY = useSharedValue(0);

  // Configure starting positions when mounting the modal
  React.useEffect(() => {
    if (isLangModalMounted) {
      // start hidden then animate in
      backdropOpacity.value = 0;
      sheetTranslateY.value = 40; // small offset from bottom to avoid jump
      backdropOpacity.value = withTiming(1, {
        duration: 180,
        easing: Easing.out(Easing.quad),
      });
      sheetTranslateY.value = withTiming(0, {
        duration: 220,
        easing: Easing.out(Easing.cubic),
      });
    }
  }, [isLangModalMounted]);

  const closeLangModal = React.useCallback(() => {
    // animate out, then unmount modal
    backdropOpacity.value = withTiming(0, {
      duration: 160,
      easing: Easing.in(Easing.quad),
    });
    sheetTranslateY.value = withTiming(
      40,
      { duration: 200, easing: Easing.in(Easing.cubic) },
      (finished: any) => {
        if (finished) {
          runOnJS(setLangModalMounted)(false);
        }
      },
    );
  }, []);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: sheetTranslateY.value }],
  }));

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

  const languageChange = React.useCallback(
    async (target?: 'tr' | 'en') => {
      try {
        const newLang: 'tr' | 'en' = target
          ? target
          : currentLang === 'tr'
          ? 'en'
          : 'tr';
        setCurrentLang(newLang);
        await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
        await i18n.changeLanguage(newLang);
        closeLangModal();
      } catch (e) {
        console.warn('Language change failed', e);
      }
    },
    [currentLang, i18n, closeLangModal],
  );

  return (
    <View style={styles.OutContainer}>
      <View style={styles.LogoLengContainer}>
        <View style={styles.LogoContainer}>
          <icons.PTTLogo width={wp('20%')} height={wp('10%')} />
        </View>
        <TouchableOpacity
          style={{ width: wp(7.35) }}
          onPress={() => setLangModalMounted(true)}
          accessibilityRole="button"
          accessibilityLabel={t('language-abstractions')}
          accessibilityHint={t('language-abstractions')}
        >
          <Text style={styles.LanguageText}>{t('language-abstractions')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HorizantalArrow} />

      <Modal
        visible={isLangModalMounted}
        transparent
        animationType="none"
        onRequestClose={closeLangModal}
      >
        <Animated.View style={[styles.animatedview, backdropStyle]}>
          <Pressable
            style={{ flex: 1 }}
            onPress={closeLangModal}
            accessibilityRole="button"
          />
          <Animated.View
            pointerEvents="auto"
            style={[styles.modalContainer, sheetStyle]}
            accessibilityLabel={t('language-abstractions')}
          >
            <View
              style={{
                alignItems: 'flex-end',
              }}
            >
              <TouchableOpacity
                onPress={closeLangModal}
                accessibilityRole="button"
                style={{
                  width: wp(6),
                  height: wp(6),
                }}
              >
                <icons.Kapatma width={wp(6)} height={wp(6)} />
              </TouchableOpacity>

              <View style={{ flex: 1 }} />
              <View style={{ width: wp('5%') }} />
            </View>
            <TouchableOpacity
              onPress={() => languageChange('tr')}
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
                {currentLang === 'tr' ? (
                  <View style={styles.radioInner}>
                    <View style={styles.radioInnershadow}></View>
                  </View>
                ) : null}
              </View>
              <Text style={styles.languageText}>Türkçe</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => languageChange('en')}
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
                {currentLang === 'en' ? (
                  <View style={styles.radioInner}>
                    <View style={styles.radioInnershadow}></View>
                  </View>
                ) : null}
              </View>
              <Text style={styles.languageText}>English</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </Modal>
    </View>
  );
};

export default NavigationBar;
