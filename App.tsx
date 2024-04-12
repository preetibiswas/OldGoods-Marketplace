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
import ListDetailScreen from './App/Screens/ListDetailScreen';

export default function App() {
  return <ListDetailScreen title="Red jacket for sale" subtitle="$100" />;
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
