import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SearchOverlayView } from './SearchOverlayView';
import { useSearchOverlayLogic, type RouteItem } from './useSearchOverlayLogic';

export type SearchOverlayRef = { open: () => void; close: () => void; };

type Props = {
  routes?: RouteItem[];
  placeholder?: string;
};

const SearchOverlay = forwardRef<SearchOverlayRef, Props>(({ routes, placeholder }, ref) => {
  const navigation = useNavigation<any>();
  const { i18n, t } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [q, setQ] = useState('');
  const inputRef = useRef<TextInput>(null);

  const { filtered, onSelect } = useSearchOverlayLogic({ i18n, t, navigation, routes, q });

  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true);
      setTimeout(() => inputRef.current?.focus(), 60);
    },
    close: () => {
      setVisible(false);
      setQ('');
      Keyboard.dismiss();
    },
  }));

  useEffect(() => {
    const unsub = navigation.addListener('state', () => {
      if (visible) {
        setVisible(false);
        setQ('');
        Keyboard.dismiss();
      }
    });
    return unsub;
  }, [navigation, visible]);

  return (
    <SearchOverlayView
      visible={visible}
      q={q}
      placeholder={placeholder ?? t('ui.searchPagesPlaceholder')}
      filtered={filtered}
      onChangeText={setQ}
      onSubmitFirst={() => {
        if (filtered.length > 0) onSelect(filtered[0]);
      }}
      onSelect={(item) => onSelect(item)}
      onClose={() => {
        setVisible(false);
        setQ('');
        Keyboard.dismiss();
      }}
      onClear={() => setQ('')}
    />
  );
});

export default SearchOverlay;