import React from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import icons from '@/assets/icons';
import styles from './style';
import { BaseHeaderProps } from './BaseHeaderProps';
import HeaderSlot from './HeaderSlot';
import LanguageSwitcherModal from './LanguageSwitcherModal';

const BaseHeader: React.FC<BaseHeaderProps> = ({
  leftIcon,
  onPressLeft,
  rightIcon,
  onPressRight,
  showLanguageSwitch = false,
  languageLabel,
  titleType = 'logo',
  title = '',
  titleLogo,
  showBottomDivider = true,
  testIDLeft,
  testIDRight,
  testIDLanguage,
}) => {
  const [langModalVisible, setLangModalVisible] = React.useState(false);

  return (
    <View style={styles.OutContainer}>
      <View style={styles.LogoLengContainer}>
        <HeaderSlot
          icon={leftIcon}
          onPress={onPressLeft}
          width={wp(10)}
          align="center"
          testID={testIDLeft}
          accessibilityLabel="header-left-button"
        />
        <View
          style={styles.logoback}
        ></View>
        <View style={styles.LogoContainer}>
          {titleType === 'logo' ? (
            titleLogo ?? <icons.PTTLogo width={wp(20)} height={wp(10)} />
          ) : (
            <Text numberOfLines={1} style={styles.titleText}>
              {title}
            </Text>
          )}
        </View>

        {showLanguageSwitch ? (
          <HeaderSlot
            icon={<Text style={styles.LanguageText}>{languageLabel}</Text>}
            onPress={() => setLangModalVisible(true)}
            width={wp(12)}
            align="flex-start"
            testID={testIDLanguage}
            accessibilityLabel="language-switch"
          />
        ) : (
          <View style={{ width: wp(12) }} />
        )}

        <HeaderSlot
          icon={rightIcon}
          onPress={onPressRight}
          width={wp(8)}
          align="center"
          testID={testIDRight}
          accessibilityLabel="header-right-button"
        />
      </View>

      {showBottomDivider && <View style={styles.HorizantalArrow} />}

      {showLanguageSwitch && (
        <LanguageSwitcherModal
          visible={langModalVisible}
          onClose={() => setLangModalVisible(false)}
        />
      )}
    </View>
  );
};
export default BaseHeader;
