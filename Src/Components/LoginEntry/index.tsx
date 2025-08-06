import { useTranslation } from 'react-i18next';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import icons from '../../Assets/icons';
import { moderateScale as s } from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();

interface LoginEntryProps {
  iconType: 'user' | 'pass';
  labelKey:
    | 'emailsubtitle'
    | 'passsubtitle'
    | 'aktivasyonsubtitle'
    | 'newpasssubtitle'
    | 'newpassconfirmsubtitle'
    | 'namesurnamesubtitle'
    | 'tcsubtitle'
    | 'telsubtitle'
    | 'ülkesubtitle'
    | 'ilsubtitle'
    | 'ilçesubtitle';
  placeholderKey:
    | 'emailholder'
    | 'passholder'
    | 'aktivasyonholder'
    | 'newpassholder'
    | 'newpasstryholder'
    | 'namesurnameholder'
    | 'tcholder'
    | 'telholder'
    | 'ülkeholder'
    | 'ilholder'
    | 'ilçeholder';
}

const LoginEntry = ({
  iconType,
  labelKey,
  placeholderKey,
}: LoginEntryProps) => {
  const { t } = useTranslation();

  const IconComponent = iconType === 'pass' ? icons.pttlock : icons.pttuser;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{t(labelKey)}</Text>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.iconContainer}>
            <IconComponent
              width={isTablet ? s(30) : s(24)}
              height={isTablet ? s(30) : s(24)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder={t(placeholderKey)}
            secureTextEntry={iconType === 'pass' && !showPassword}
          />
          {iconType === 'pass' && (
            <TouchableOpacity
              style={styles.toggleContainer}
              onPress={() => setShowPassword(prev => !prev)}
            >
              <icons.pttsifregosterme
                width={isTablet ? s(30) : s(24)}
                height={isTablet ? s(30) : s(24)}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default LoginEntry;
