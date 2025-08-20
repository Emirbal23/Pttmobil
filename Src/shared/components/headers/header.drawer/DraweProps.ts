import React from 'react';
import icons from '@/assets/icons';
import colors from '@/shared/theme/color';
import { ImageSourcePropType } from 'react-native';
export type DrawerContentProps = {
  avatar?: React.ReactNode;
  fullName?: string;
  editable?: boolean;
};
export type DrawerSubItem = {
  key: string;
  label: string;
  onPress?: () => void;
};
export type DrawerMenuItem = {
  key: string;
  label: string;
  onPress?: () => void; // if no children, press triggers this
  disabled?: boolean;
  color?: string; // optional: overrides background color of the row
  IconLeft?: React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;
  children?: DrawerSubItem[]; // if provided, row behaves like an accordion
  initiallyExpanded?: boolean;
};
export type DrawerProps = {
  visible: boolean;
  title?: string;
  avatar?: ImageSourcePropType | React.ReactNode;
  fullName?: string;
  items?: DrawerMenuItem[];
  side?: 'left' | 'right';
  isVisible?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};
/**
 * useDrawerMenu
 * Merkezi menü yapısı. DrawerContent bu hook'tan beslenir.
 * İstersen burada i18n/feature flag/rol bazlı koşullar ekleyebilirsin.
 */
export const useDrawerMenu = () => {
  const items: DrawerMenuItem[] = React.useMemo(
    () => [
      {
        key: 'kargo',
        label: 'Kargo',
        IconLeft: icons.pttkargowhite,
        children: [
          { key: 'k1', label: 'Kargo Takip' },
          { key: 'k2', label: 'Gönderi Oluştur' },
          { key: 'k3', label: 'Fiyat Hesapla' },
          { key: 'k4', label: 'Şubeler' },
          { key: 'k5', label: 'SSS' },
        ],
      },
      {
        key: 'filateli',
        label: 'Filateli',
        IconLeft: icons.pttfilateli,
        children: [
          { key: 'f1', label: 'Filatelik Ürünler' },
          { key: 'f2', label: 'Aldığım Ürünler' },
          { key: 'f3', label: 'Duyurular' },
          { key: 'f4', label: 'Koleksiyonlar' },
          { key: 'f5', label: 'Daha Fazla' },
        ],
      },
      {
        key: 'telgraf',
        label: 'Telgraf',
        IconLeft: icons.ptttelgraf,
        children: [
          { key: 't1', label: 'Telgraf Gönder' },
          { key: 't2', label: 'Şablonlar' },
          { key: 't3', label: 'Fiyatlandırma' },
          { key: 't4', label: 'Ödeme' },
          { key: 't5', label: 'Geçmiş' },
        ],
      },
      {
        key: 'kargomat',
        label: 'Kargomat',
        IconLeft: icons.pttkargomatwhite,
        children: [
          { key: 'km1', label: 'En Yakın Kargomat' },
          { key: 'km2', label: 'Paket Bırak' },
          { key: 'km3', label: 'Paket Al' },
          { key: 'km4', label: 'Çalışma Saatleri' },
          { key: 'km5', label: 'SSS' },
        ],
      },
      {
        key: 'iletisim',
        label: 'Bize Ulaşın',
        IconLeft: icons.pttcalling,
        color: colors.grey200,
        children: [
          { key: 'i1', label: 'İletişim Formu' },
          { key: 'i2', label: 'Çağrı Merkezi' },
          { key: 'i3', label: 'Canlı Destek' },
          { key: 'i4', label: 'Mağazalar' },
          { key: 'i5', label: 'Geri Bildirim' },
        ],
      },
      {
        key: 'hakkimizda',
        label: 'Hakkımızda',
        IconLeft: icons.ptthelp,
        color: colors.grey200,
        children: [
          { key: 'h1', label: 'Misyon' },
          { key: 'h2', label: 'Vizyon' },
          { key: 'h3', label: 'Tarihçe' },
          { key: 'h4', label: 'Ekibimiz' },
          { key: 'h5', label: 'Basın' },
        ],
      },
    ],
    [],
  );

  return { items };
};
