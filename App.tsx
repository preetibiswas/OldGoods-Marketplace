/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import {Registration} from './App/Screens/Registration';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImage from './App/Screens/ViewImage';
import colors from './App/Config/colors';
import AppText from './App/component/AppText';
import AppButton from './App/component/AppButton';

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
