import React, { useRef, useState } from 'react';
import BaseHeader from '../base.header/BaseHeader';
import icons from '@/assets/icons';
import { useTranslation } from 'react-i18next';
import { Drawer, DrawerContent } from '../../drawer';
import SearchOverlay, { SearchOverlayRef } from '../../search/Search';

const MainHeader: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const searchRef = useRef<SearchOverlayRef>(null); // 👈 ref

  return (
    <>
      <BaseHeader
        titleType="logo"
        leftIcon={<icons.menulinehorizantal />}
        rightIcon={<icons.search />}
        showLanguageSwitch={true}
        languageLabel={i18n.language.toUpperCase()}
        onPressLeft={() => setOpen(true)}
        onPressRight={() => searchRef.current?.open()} // 👈 burada çağırıyorsun
      />

      <Drawer side="left" visible={open} onClose={() => setOpen(false)}>
        <DrawerContent
          honorific="Sayın"
          editable={true}
          fullName="Emirhan BAL"
        />
      </Drawer>

      {/* Overlay componenti burada mount ediliyor */}
      <SearchOverlay ref={searchRef} />
    </>
  );
};

export default MainHeader;