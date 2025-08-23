import React from 'react';
import icons from '@/assets/icons';
import colors from '@/shared/theme/color';
import { ImageSourcePropType } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

export type DrawerContentProps = {
  avatar?: React.ReactNode;
  fullName?: string;
  editable?: boolean;
  honorific?: string;
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
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const items: DrawerMenuItem[] = React.useMemo(
    () => [
      {
        key: 'kargo',
        label: t('pages.Kargo.title'),
        IconLeft: icons.pttkargowhite,
        children: [
          {
            key: 'k1',
            label: t('pages.KargoTakip.title'),
            onPress: () => navigation.navigate('KargoTakip'),
          },
          {
            key: 'k2',
            label: t('pages.BireyselOnKabul.title'),
            onPress: () => navigation.navigate('BireyselOnKabul'),
          },
          {
            key: 'k3',
            label: t('pages.BireyselSiparis.title'),
            onPress: () => navigation.navigate('BireyselSiparis'),
          },
        ],
      },
      {
        key: 'filateli',
        label: t('pages.Filateli.title'),
        IconLeft: icons.pttfilateli,
        children: [
          {
            key: 'f1',
            label: t('pages.FilatelikUrunler.title'),
            onPress: () => navigation.navigate('FilatelikUrunler'),
          },
          {
            key: 'f2',
            label: t('pages.AldigimUrunler.title'),
            onPress: () => navigation.navigate('AldigimUrunler'),
          },
          {
            key: 'f3',
            label: t('pages.Duyurular.title'),
            onPress: () => navigation.navigate('Duyurular'),
          },
          {
            key: 'f5',
            label: t('pages.DahaFazla.title'),
            onPress: () => navigation.navigate('DahaFazla'),
          },
        ],
      },
      {
        key: 'telgraf',
        label: t('pages.Telgraf.title'),
        IconLeft: icons.ptttelgraf,
        children: [
          {
            key: 't1',
            label: t('pages.TelgrafIslemleri.title'),
            onPress: () => navigation.navigate('TelgrafIslemleri'),
          },
          {
            key: 't2',
            label: t('pages.DahaFazla.title'),
            onPress: () => navigation.navigate('DahaFazlaTelgraf'),
          },
        ],
      },
      {
        key: 'kargomat',
        label: t('pages.Kargomat.title'),
        IconLeft: icons.pttkargomatwhite,
        children: [
          {
            key: 'km1',
            label: t('pages.KargomatGonderileri.title'),
            onPress: () => navigation.navigate('KargomatGonderileri'),
          },
          {
            key: 'km2',
            label: t('pages.EnYakinKargomat.title'),
            onPress: () => navigation.navigate('EnYakinKargomat'),
          },
          {
            key: 'km3',
            label: t('pages.KargomatHakkinda.title'),
            onPress: () => navigation.navigate('KargomatHakkinda'),
          },
          {
            key: 'km4',
            label: t('pages.NasilKullanirim.title'),
            onPress: () => navigation.navigate('NasilKullanirim'),
          },
        ],
      },
      {
        key: 'iletisim',
        label: t('pages.Iletisim.title'),
        IconLeft: icons.pttcalling,
        color: colors.grey200,
        onPress: () => {
          navigation.navigate('Contact');
        },
      },
      {
        key: 'hakkimizda',
        label: t('pages.Hakkimizda.title'),
        IconLeft: icons.ptthelp,
        color: colors.grey200,
        onPress: () => {
          navigation.navigate('About');
        },
      },
    ],
    [],
  );

  return { items };
};
