import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import icons from '@/assets/icons';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  return (
    <View style={styles.BottomBarOutContainer}>
      <View style={styles.BottomBarContainer}>
        <View style={styles.BottomBarOptionContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.BottomBarOption}
            onPress={() => navigation.navigate('EnYakinPtt')}
          >
            <icons.pttharita />
          </TouchableOpacity>
          <Text style={styles.BottomBarText}>
            {t('pages.EnYakinPTT.title')}
          </Text>
        </View>
        <View style={styles.BottomBarOptionContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.BottomBarOption}
            onPress={() => navigation.navigate('GonderiHesapla')}
          >
            <icons.ptthesaplama />
          </TouchableOpacity>
          <Text style={styles.BottomBarText}>
            {t('pages.GonderiHesapla.title')}
          </Text>
        </View>
        <View style={styles.BottomBarOptionContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.BottomBarOption}
            onPress={() => navigation.navigate('PostaKodu')}
          >
            <icons.pttpostakodu />
          </TouchableOpacity>
          <Text style={styles.BottomBarText}>{t('pages.PostaKodu.title')}</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomBar;
