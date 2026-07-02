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
} from '@/modules/auth';
import {
  MainMenu,
  Contact,
  Profile,
  About,
  EnYakinPtt,
  GonderiHesapla,
  PostaKodu,
} from '@/modules/main';
import { BireyselOnKabul, BireyselSiparis, KargoTakip } from '@/modules/cargo';
import {
  EnYakinKargomat,
  KargomatGonderileri,
  KargomatHakkinda,
  NasilKullanirim,
} from '@/modules/cargomat';
import {
  AldigimUrunler,
  DahaFazla,
  Duyurular,
  FilatelikUrunler,
} from '@/modules/philately';
import { DahaFazlaTelgraf, TelgrafIslemleri } from '@/modules/telegraph';
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
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{ gestureEnabled: false, headerBackVisible: false }}
      />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="BireyselSiparis" component={BireyselSiparis} />
      <Stack.Screen name="BireyselOnKabul" component={BireyselOnKabul} />
      <Stack.Screen name="KargoTakip" component={KargoTakip} />
      <Stack.Screen name="EnYakinPtt" component={EnYakinPtt} />
      <Stack.Screen name="PostaKodu" component={PostaKodu} />
      <Stack.Screen name="GonderiHesapla" component={GonderiHesapla} />
      <Stack.Screen name="EnYakinKargomat" component={EnYakinKargomat} />
      <Stack.Screen
        name="KargomatGonderileri"
        component={KargomatGonderileri}
      />
      <Stack.Screen name="KargomatHakkinda" component={KargomatHakkinda} />
      <Stack.Screen name="NasilKullanirim" component={NasilKullanirim} />
      <Stack.Screen name="AldigimUrunler" component={AldigimUrunler} />
      <Stack.Screen name="DahaFazla" component={DahaFazla} />
      <Stack.Screen name="Duyurular" component={Duyurular} />
      <Stack.Screen name="FilatelikUrunler" component={FilatelikUrunler} />
      <Stack.Screen name="TelgrafIslemleri" component={TelgrafIslemleri} />
      <Stack.Screen name="DahaFazlaTelgraf" component={DahaFazlaTelgraf} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
