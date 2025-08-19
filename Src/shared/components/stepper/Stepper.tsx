import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import type { StepperProps } from './StepperProps';

const Stepper: React.FC<StepperProps> = ({ icon: IconOrElement, text }) => {
  // Always force the icon to 58x58
  const iconSize = { width: 58, height: 58 } as const;

  let renderedIcon: React.ReactNode = null;

  if (IconOrElement) {
    // If a component type was passed (e.g. icon={icons.stepper})
    if (typeof IconOrElement === 'function') {
      const IconComp = IconOrElement as unknown as React.ComponentType<any>;
      renderedIcon = <IconComp {...iconSize} />;
    }
    // If a JSX element was passed (e.g. icon={<icons.stepper />})
    else if (React.isValidElement(IconOrElement)) {
      renderedIcon = React.cloneElement(IconOrElement, iconSize);
    }
    // Otherwise, render as-is (fallback)
    else {
      renderedIcon = IconOrElement as React.ReactNode;
    }
  }

  return (
    <View style={styles.OutContainer}>
      <View style={styles.Container}>
        <View style={styles.StepperContainer}>{renderedIcon}</View>
        <Text style={styles.Text}>{text}</Text>
      </View>
    </View>
  );
};

export default Stepper;
