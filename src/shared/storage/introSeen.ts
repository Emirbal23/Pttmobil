import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'intro_seen_v1'; 

export async function getIntroSeen() {
  try { return (await AsyncStorage.getItem(KEY)) === '1'; }
  catch { return false; }
}

export async function setIntroSeen() {
  try { await AsyncStorage.setItem(KEY, '1'); } catch {}
}

export async function resetIntroSeen() {
  try { await AsyncStorage.removeItem(KEY); } catch {}
}