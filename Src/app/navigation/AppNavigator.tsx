import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/types/navigation';


import {
  Promotion,
  Login,
  ForgotPassword,
  ForgotPasswordNext,
  Register,
  RegisterNext,
} from '@/features/auth';
import { getIntroSeen } from '@/shared/storage/introSeen';

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppNavigator() {
  const [loading, setLoading] = useState(true);
  const [introSeen, setIntroSeen] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const seen = await getIntroSeen();
      if (mounted) {
        setIntroSeen(seen);
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Stack.Navigator
      key={introSeen ? 'seen' : 'not-seen'}
      initialRouteName={introSeen ? 'Login' : 'Promotion'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Promotion"
        component={Promotion}
        options={{ gestureEnabled: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ gestureEnabled: false, headerBackVisible: false }}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordNext" component={ForgotPasswordNext} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterNext" component={RegisterNext} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
