import { AppRegistry } from 'react-native';
import Routes from './src/app/app';
import { name as appName } from './app.json';
import { initI18n } from './src/shared/i18n/i18n';

initI18n();

AppRegistry.registerComponent(appName, () => Routes);
