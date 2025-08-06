import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Root from './Root';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '../Config';

const Routes = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </I18nextProvider>
  );
};

export default Routes;
