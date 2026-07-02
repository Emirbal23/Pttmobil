import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import BaseHeader from '../base.header/BaseHeader';
import icons from '@/assets/icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import { Drawer, DrawerContent } from '../../drawer';

interface DetailHeaderProps {
  title: string;
  rightIcon?: boolean;
  leftOnPress?: () => void;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ title, rightIcon, leftOnPress }) => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <>
      <BaseHeader
        titleType="text"
        title={title}
        leftIcon={<icons.gobackwhite width={wp(7)} height={wp(6)} />}
        rightIcon={rightIcon ? <icons.pttmenulinefliphorizantal /> : null}
        onPressRight={() => setOpen(true)}
        onPressLeft={leftOnPress ? leftOnPress : () => navigation.goBack()}
        showLanguageSwitch={false}
      />
      <Drawer side="right" visible={open} onClose={() => setOpen(false)}>
        <DrawerContent editable={true} />
      </Drawer>
    </>
  );
};

export default DetailHeader;
