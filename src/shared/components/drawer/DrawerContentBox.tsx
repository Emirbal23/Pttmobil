import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { s } from 'react-native-size-matters';
import icons from '@/assets/icons';
import colors from '@/shared/theme/color';
import { DrawerMenuItem } from './DrawerProps';
import { contentStyles } from './styles';
import { useTranslation } from 'react-i18next';

export const AccordionItem: React.FC<{ item: DrawerMenuItem }> = ({ item }) => {
  const [expanded, setExpanded] = React.useState(!!item.initiallyExpanded);
  const hasChildren = !!item.children && item.children.length > 0;
  const disabled = !!item.disabled;

  const handlePressRow = () => {
    if (disabled) return;
    if (hasChildren) setExpanded(e => !e);
    else if (item.onPress) item.onPress();
  };
  const { t } = useTranslation();

  return (
    <View>
      <TouchableOpacity
        onPress={handlePressRow}
        disabled={disabled}
        activeOpacity={0.8}
        style={[
          contentStyles.menuRow,
          disabled && contentStyles.menuRowDisabled,
          { backgroundColor: item.color ?? colors.primary },
        ]}
      >
        <View style={contentStyles.menuLeft}>
          {item.IconLeft ? (
            <item.IconLeft width={s(22)} height={s(22)} />
          ) : (
            <Text style={contentStyles.fallbackIcon}>◼︎</Text>
          )}
          <Text
            style={[
              contentStyles.menuLabel,
              disabled && contentStyles.menuLabelDisabled,
            ]}
          >
            {t(item.label)}
          </Text>
        </View>
        {/* Right chevron toggles up/down if expandable */}
        <View style={contentStyles.chevIconWrap}>
          {hasChildren ? (
            expanded ? (
              icons?.pttarrowdown ? (
                <icons.pttarrowdown width={s(35)} height={s(35)} />
              ) : null
            ) : icons?.gobackwhite ? (
              <icons.gobackwhite width={s(15)} height={s(15)} />
            ) : (
              <Text
                style={[
                  contentStyles.chev,
                  disabled && contentStyles.chevDisabled,
                ]}
              >
                ›
              </Text>
            )
          ) : (
            <Text
              style={[
                contentStyles.chev,
                disabled && contentStyles.chevDisabled,
              ]}
            >
              ›
            </Text>
          )}
        </View>
      </TouchableOpacity>

      {/* Sub items */}
      {hasChildren && expanded ? (
        <View style={contentStyles.subList}>
          {item.children!.map(sub => (
            <TouchableOpacity
              key={sub.key}
              onPress={sub.onPress}
              style={contentStyles.subRow}
              activeOpacity={0.8}
            >
              <Text style={contentStyles.subLabel}>{sub.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};
