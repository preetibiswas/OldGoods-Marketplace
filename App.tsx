/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Registration} from './App/Screens/Registration';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Registration />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
