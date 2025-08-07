import { AppRegistry } from 'react-native';
import Routes from './Src/Routes';
import { name as appName } from './app.json';
import { initI18n } from './Src/Config/i18n';

// i18n başlat, ama komponenti direkt kaydet
initI18n();

AppRegistry.registerComponent(appName, () => Routes);
