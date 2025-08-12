import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import icons from '@/assets/icons';

const ResetPassMessage = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          width: '80%',
          height: 70,
          borderRadius: 10,
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: 'green',
        }}
      >
        <View
          style={{
            backgroundColor: 'green',
            width: 35,
            height: '100%',
            borderBottomLeftRadius: 7,
            borderTopLeftRadius: 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <icons.correct width={15} height={15}></icons.correct>
        </View>
        <View
          style={{
            width: '87%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 13,
          }}
        >
          <Text style={{ color: 'green' }}>
            Şifre sıfırlama bağlantısı e-postanıza gönderilmiştir
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ResetPassMessage;

const styles = StyleSheet.create({});
