import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './navigator/index.js'
import { AppLoading } from 'expo'
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigator />
}