import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouterNames } from '../Config';
import { Tanıtım, Login } from '../Screens/';

const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator initialRouteName={RouterNames.Tanıtım}>
      <Stack.Screen
        name={RouterNames.Tanıtım}
        component={Tanıtım}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RouterNames.Login}
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Root;
