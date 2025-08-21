import React, { useState } from 'react';
import BaseHeader from '../base.header/BaseHeader';
import icons from '@/assets/icons';
import { useTranslation } from 'react-i18next';
import { Drawer, DrawerContent } from '../header.drawer';
const MainHeader: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <BaseHeader
        titleType="logo"
        leftIcon={<icons.menulinehorizantal />}
        rightIcon={<icons.search />}
        showLanguageSwitch={true}
        languageLabel={i18n.language.toUpperCase()}
        onPressLeft={() => setOpen(true)} // ← Drawer açılır
        onPressRight={() => {}}
      />
      <Drawer side="left" visible={open} onClose={() => setOpen(false)}>
        <DrawerContent
          honorific="Sayın"
          editable={true}
          fullName="Emirhan BAL"
        />
      </Drawer>
    </>
  );
};

export default MainHeader;
