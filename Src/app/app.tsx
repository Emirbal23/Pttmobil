import 'react-native-gesture-handler';

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
