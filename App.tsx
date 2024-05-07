/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/stores';
import AppRouter from './src/navigators/AppRouter';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500)
    return () => clearTimeout(timeout);
  }, []);





  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Provider store={store}>
        {
          isShowSplash ? (
            <SplashScreen />
          ) : (
            <NavigationContainer>
              <AppRouter />
            </NavigationContainer>
          )
        }
      </Provider>

    </>
  );
};

export default App;