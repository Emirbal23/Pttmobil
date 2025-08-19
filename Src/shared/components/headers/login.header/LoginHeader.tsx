import React from 'react';
import BaseHeader from '../base.header/BaseHeader'; 
import { useTranslation } from 'react-i18next';

const LoginHeader = () => {
  const { i18n } = useTranslation();

  return (
    <BaseHeader
      titleType="logo"
      showLanguageSwitch
      languageLabel={i18n.language.toUpperCase()}
    />
  );
};

export default LoginHeader;