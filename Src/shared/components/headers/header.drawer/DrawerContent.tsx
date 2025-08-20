import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { s } from 'react-native-size-matters';
import icons from '@/assets/icons';
import { useDrawerMenu, DrawerContentProps } from './DraweProps';
import { AccordionItem } from './DraweContentBox';
import { contentStyles } from './styles';

export const DrawerContent: React.FC<DrawerContentProps> = ({
  avatar,
  fullName = '',
  editable = false,
}) => {
  const { items } = useDrawerMenu();

  return (
    <ScrollView
      contentContainerStyle={contentStyles.scroll}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      <View style={contentStyles.headerWrap}>
        <View style={contentStyles.avatarOuter}>
          <View style={contentStyles.avatarDashed} />
          <View style={contentStyles.avatarHolder}>
            {avatar ? (
              avatar // dışarıdan verilen avatar ya da icon
            ) : (
              <icons.pttuserwhite width={60} height={60} />
            )}
          </View>
          {/* small edit badge OUTSIDE holder */}
          {editable && (
            <TouchableOpacity
              activeOpacity={0.5}
              style={[contentStyles.editBadge]}
            >
              {icons?.pttduzenle ? (
                <icons.pttduzenle width={s(16)} height={s(16)} />
              ) : (
                <Text style={{ color: '#0B7E97', fontSize: s(12) }}>✎</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
        <Text style={contentStyles.honorific}>{'Sayın'}</Text>
        {fullName ? (
          <Text style={contentStyles.fullName}>{fullName}</Text>
        ) : null}
      </View>

      {/* Menu Items */}
      <View style={{ gap: s(10) }}>
        {items.map(it => (
          <AccordionItem key={it.key} item={it} />
        ))}
      </View>

      {/* Social Footer */}
      <View style={contentStyles.footer}>
        <Text style={contentStyles.followText}>
          Sosyal medya {'\n'} hesaplarımızı takip edin
        </Text>
        <View style={contentStyles.socialRow}>
          <TouchableOpacity>
            <icons.facebook width={s(30)} height={s(30)} />
          </TouchableOpacity>
          <TouchableOpacity>
            <icons.instagram width={s(30)} height={s(30)} />
          </TouchableOpacity>
          <TouchableOpacity>
            <icons.x width={s(30)} height={s(30)} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
