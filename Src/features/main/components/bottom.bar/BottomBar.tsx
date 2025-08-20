import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import icons from '@/assets/icons';
import styles from './style';

const BottomBar = () => {
  return (
    <View style={styles.BottomBarOutContainer}>
      <View style={styles.BottomBarContainer}>
        <View style={styles.BottomBarOptionContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.BottomBarOption}>
            <icons.pttharita />
          </TouchableOpacity>
          <Text style={styles.BottomBarText}>En Yakın PTT</Text>
        </View>
        <View style={styles.BottomBarOptionContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.BottomBarOption}>
            <icons.ptthesaplama />
          </TouchableOpacity>
          <Text style={styles.BottomBarText}>Gönderi Hesapla</Text>
        </View>
        <View style={styles.BottomBarOptionContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.BottomBarOption}>
            <icons.pttpostakodu />
          </TouchableOpacity>
          <Text style={styles.BottomBarText}>Posta Kodu</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomBar;
