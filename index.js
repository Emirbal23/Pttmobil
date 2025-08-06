import { AppRegistry } from 'react-native';
import Routes from './Src/Routes';
import { name as appName } from './app.json';
import { initI18n } from './Src/Config/i18n';

const start = async () => {
  await initI18n();
  AppRegistry.registerComponent(appName, () => Routes);
};

start();