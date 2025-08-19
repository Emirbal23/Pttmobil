import React from 'react';
import BaseHeader from '../base.header/BaseHeader';
import icons from '@/assets/icons';
import { useTranslation } from 'react-i18next';

const MainHeader: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <BaseHeader
      titleType="logo"
      leftIcon={<icons.menulinehorizantal/>}
      rightIcon={<icons.search/>}
      showLanguageSwitch={true}
      languageLabel={i18n.language.toUpperCase()}
      onPressLeft={() => {}}
      onPressRight={() => {}}
    />
  );
};

export default MainHeader;
