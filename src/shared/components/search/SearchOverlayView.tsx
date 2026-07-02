import React from 'react';
import { Modal, View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { s } from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '@/shared/theme/color';
import DetailHeader from '@/shared/components/headers/detail.header/DetailHeader';
import styles from './style';
import type { RouteItem } from './useSearchOverlayLogic';

const isTablet = DeviceInfo.isTablet();

export type SearchOverlayViewProps = {
  visible: boolean;
  q: string;
  placeholder: string;
  filtered: RouteItem[];
  onChangeText: (v: string) => void;
  onSubmitFirst: () => void;
  onSelect: (item: RouteItem) => void;
  onClose: () => void;
  onClear: () => void;
};

export const SearchOverlayView: React.FC<SearchOverlayViewProps> = ({
  visible,
  q,
  placeholder,
  filtered,
  onChangeText,
  onSubmitFirst,
  onSelect,
  onClose,
  onClear,
}) => {
  const insets = useSafeAreaInsets();
  const inputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    if (visible) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      presentationStyle="overFullScreen"
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* Arka plan */}
      <Pressable onPress={onClose} style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.35)' }]} />

      {/* Üstte input bar + list */}
      <View style={[styles.sheet, { paddingBottom: insets.bottom }]}>
        <View style={{ backgroundColor: colors.grey900, paddingTop: insets.top + s(isTablet ? 6 : 8) }}>
          <DetailHeader leftOnPress={onClose} title="Arama" />
        </View>

        <View style={[styles.inputWrap, { marginTop: s(12) }]}>
          <TextInput
            ref={inputRef}
            placeholder={placeholder}
            placeholderTextColor="#9AA0A6"
            value={q}
            onChangeText={onChangeText}
            returnKeyType="search"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={onSubmitFirst}
          />
          {q.length > 0 ? (
            <Pressable onPress={onClear} hitSlop={8} style={styles.clearBtn}>
              <Text style={styles.clearTxt}>×</Text>
            </Pressable>
          ) : null}
        </View>

        {q.trim().length > 0 && (
          <View style={[styles.resultsPanel, { maxHeight: Math.min(Math.max(filtered.length, 1) * 56, 420) }]}>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ paddingBottom: s(12) }} showsVerticalScrollIndicator={false} bounces>
              {filtered.length === 0 ? (
                <View style={styles.empty}>
                  <Text style={styles.emptyTxt}>Sonuç yok</Text>
                </View>
              ) : (
                filtered.map((item, idx) => (
                  <Pressable key={`${item.route}-${idx}`} onPress={() => onSelect(item)} style={styles.item}>
                    <Text style={styles.itemTitle}>{item.label}</Text>
                  </Pressable>
                ))
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </Modal>
  );
};