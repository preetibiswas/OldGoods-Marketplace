/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Registration} from './App/Screens/Registration';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImage from './App/Screens/ViewImage';
import colors from './App/Config/colors';
import AppText from './App/component/AppText';
import AppButton from './App/component/AppButton';
import AppCard from './App/component/AppCard';

export default function App() {
  return (
    <ScrollView>
      <AppCard title="Red jacket for sale" subtitle="$100" />
      <AppCard title="Red jacket for sale" subtitle="$100" />
      <AppCard title="Red jacket for sale" subtitle="$100" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
