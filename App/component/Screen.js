/* eslint-disable prettier/prettier */
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export default function Screen({children, style}) {
  return <SafeAreaView style={[styles.cont, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  cont: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: 2,
  },
});
