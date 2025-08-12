import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/types/navigation';

import { PromotionScreen, LoginScreen, ForgotPasswordScreen } from '@/features/auth'; 

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Promotion" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Promotion" component={PromotionScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          gestureEnabled: false,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen name="ForgetPass" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;