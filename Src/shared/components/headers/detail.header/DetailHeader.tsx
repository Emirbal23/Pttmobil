import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import BaseHeader from '../base.header/BaseHeader';
import icons from '@/assets/icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface DetailHeaderProps {
  title: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ title }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <BaseHeader
      titleType="text"
      title={title}
      leftIcon={<icons.gobackwhite width={wp(7)} height={wp(6)} />}
      onPressLeft={() => navigation.goBack()}
      showLanguageSwitch={false}
    />
  );
};

export default DetailHeader;
