import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '@/shared/theme/color';
import styles from './style ';

interface SegmentedControlProps {
  selected: string;
  onChange: (value: string) => void;
  options: { key: string; label: string }[];
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  selected,
  onChange,
  options,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.innerContainer,
          borderRightColor:
            selected === options[1]?.key ? colors.secondary : colors.grey800,
          borderLeftColor:
            selected === options[0]?.key ? colors.secondary : colors.grey800,
        }}
      >
        {options.map(option => (
          <TouchableOpacity
            key={option.key}
            onPress={() => onChange(option.key)}
            style={{
              ...styles.option,
              backgroundColor:
                selected === option.key ? colors.secondary : 'transparent',
            }}
            activeOpacity={0.9}
          >
            <Text style={styles.text}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SegmentedControl;
