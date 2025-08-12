import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import images from '@/assets/images';
import icons from '@/assets/icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { isTablet } from 'react-native-device-info';
import type { RootStackParamList } from '@/app/navigation/types';
import colors from '@/shared/theme/color';
const Tanıtım = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.6, 1]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View style={styles.TopContainer}>
          <View style={styles.CloseButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <icons.Kapatma
                width={isTablet() ? wp(5) : wp(7)}
                height={isTablet() ? wp(5) : wp(7)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.TopMassageContainer}>
            <Text style={styles.TopMassageText}>{t('TanıtımSubtitle')}</Text>
          </View>
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.Image} source={images.Tanıtım} />
        </View>
        <View style={styles.BottomContainer}>
          <View style={styles.BottomPartContainer}>
            <View style={styles.YellowBar}></View>
          </View>
          <Text style={styles.BottomText}>{t('TanıtımMassage')}</Text>
          <View style={styles.BottomPartContainer}>
            <View style={styles.YellowBar}></View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Tanıtım;
