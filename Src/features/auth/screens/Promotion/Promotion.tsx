import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import images from '@/assets/images';
import icons from '@/assets/icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';
import type { RootStackParamList } from '@/app/navigation/types';
import colors from '@/shared/theme/color';
import { setIntroSeen } from '@/shared/storage/introSeen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Promotion = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [submitting, setSubmitting] = useState(false);

  const handleContinue = useCallback(async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await setIntroSeen();
      navigation.replace('Login' as never);
    } catch (e) {
      setSubmitting(false);
    }
  }, [navigation, submitting]);

  const tablet = DeviceInfo.isTablet();
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[colors.secondary, colors.white]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.6, 1]}
      style={{ flex: 1 }}
    >
      <StatusBar
        translucent={false}
        backgroundColor="#000"
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop:
            Platform.OS === 'android'
              ? (StatusBar.currentHeight ?? 0) * 1.5
              : 0,
        }}
      >
        <View style={styles.TopContainer}>
          <View style={styles.CloseButtonContainer}>
            <TouchableOpacity
              onPress={handleContinue}
              disabled={submitting}
              accessibilityRole="button"
              accessibilityLabel="Kapat ve devam et"
              testID="promo-close"
            >
              <icons.close
                width={tablet ? wp(5) : wp(7)}
                height={tablet ? wp(5) : wp(7)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.TopMassageContainer}>
            <Text style={styles.TopMassageText}>{t('promotionSubtitle')}</Text>
          </View>
        </View>

        <View style={styles.ImageContainer}>
          <Image style={styles.Image} source={images.Tanıtım} />
        </View>

        <View style={styles.BottomContainer}>
          <View style={styles.BottomPartContainer}>
            <View style={styles.YellowBar} />
          </View>

          <Text style={styles.BottomText}>{t('promotionMassage')}</Text>

          <View style={styles.BottomPartContainer}>
            <View style={styles.YellowBar} />
          </View>
        </View>

        {submitting && (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 24,
              alignItems: 'center',
            }}
          >
            <ActivityIndicator />
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Promotion;
