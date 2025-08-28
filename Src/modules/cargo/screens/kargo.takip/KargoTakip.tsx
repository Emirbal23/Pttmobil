import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import colors from '@/shared/theme/color';
import SegmentedControl from '@/shared/components/segmented.controls/SegmentedControl';
import { t } from 'i18next';
import styles from './style';

import DeviceInfo from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { s } from 'react-native-size-matters';
import { InputFactory } from '@/shared/components/inputs';
const isTablet = DeviceInfo.isTablet();
import Tracking from './Tracking';
import { ButtonFactory } from '@/shared/components/buttons';

const KargoTakip = () => {
  const [selected, setSelected] = useState('track');

  const renderContent = () => {
    if (selected === 'track') {
      return <Tracking />;
    }

    if (selected === 'archive') {
      return (
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: colors.grey800, fontSize: 16 }}>
           Şuanda Göseterilebilecek bir arşiv bulunmamaktadır.
          </Text>
        </View>
      );
    }
    return null;
  };

  return (
    <ScreenBackground
      variant="detail"
      title={t('pages.KargoTakip.title')}
      rightIcon={true}
    >
      <SegmentedControl
        selected={selected}
        onChange={setSelected}
        options={[
          { key: 'track', label: t('pages.KargoTakip.primaryoption') },
          { key: 'archive', label: t('pages.KargoTakip.secondaryoption') },
        ]}
      />
      {renderContent()}
    </ScreenBackground>
  );
};

export default KargoTakip;
